// Code adapted from @andypandy Expo Snack Example
// https://snack.expo.dev/@andypandy/document-picker
import React, { useContext, useState } from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import { View, Text, Keyboard } from 'react-native'
import * as DocumentPicker from 'expo-document-picker'
import { ImagePicker } from 'expo'

// Customs
import { getValueFor } from '../../../shared/UserAuthentication'
import { InputField } from '../../../components/form-fields/InputField'
import C_Button from '../../../components/UIComponents/Button'
import { globalColors } from '../../../../styles/global'
import { PodcastsContext } from '../../../hooks/context/PodcastsProvider'

export default function UploadPodcastForm(props, { podcastData }) {
    const { setUserPodcastsUpdated } = useContext(PodcastsContext)
    const [responseMessage, setResponseMessage] = useState(null)
    const [errors, setErrors] = useState(null)
    const [selectedCoverFile, setSelectedCoverFile] = useState({
        coverFile: undefined,
        coverPreviewURI: undefined,
    })

    const [selectedAudioFile, setSelectedAudioFile] = useState({
        audioFile: undefined,
        audioPreviewURI: undefined,
    })

    const pickPodcastCoverFile = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: '*/*',
            copyToCacheDirectory: true,
        }).then((response) => {
            if (response.type == 'success') {
                let { name, size, uri } = response
                let nameParts = name.split('.')
                let fileType = nameParts[nameParts.length - 1]
                var fileToUpload = {
                    name: name,
                    size: size,
                    uri: uri,
                    type: 'application/' + fileType,
                }
                setSelectedCoverFile(fileToUpload)
            }
        })
    }
    const pickPodcastAudioFile = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: '*/*',
            copyToCacheDirectory: true,
        }).then((response) => {
            if (response.type == 'success') {
                let { name, size, uri } = response
                let nameParts = name.split('.')
                let fileType = nameParts[nameParts.length - 1]
                var fileToUpload = {
                    name: name,
                    size: size,
                    uri: uri,
                    type: 'application/' + fileType,
                }
                setSelectedAudioFile(fileToUpload)
            }
        })
    }

    //#region
    const COVER_FILE_SIZE = 1048576 // 1mb
    const COVER_FILE_SUPPORTED_FORMATS = [
        'image/jpg',
        'image/jpeg',
        'image/png',
    ]
    const AUDIO_FILE_SIZE = 31752000 // 31.752mb
    const AUDIO_FILE_SUPPORTED_FORMATS = [
        'audio/mpeg',
        'audio/vnd.wav',
        'audio/mp4',
        'audio/x-aiff',
    ]

    const podcastValidationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Podcast must have a title')
            .matches(/^[ A-Za-zñáéíóúü0-9_.&-]*$/, 'You may only use _ . - ')
            .matches(/^(?![0-9_.-]+$)/, 'Letters are required')
            .max(32, 'Title is too long'),
        description: Yup.string().max(64, 'Description is too long'),
        episode: Yup.string()
            .matches(/^\d+$/, 'You must specify a number only')
            .typeError('A number must be specified'),
        coverFile: Yup.mixed()
            .required('A cover file is required')
            .test(
                'coverFileSize',
                'File size too large, max file size is  1 Mb',
                (file) => (file ? file.size <= COVER_FILE_SIZE : true)
            )
            .test('coverFileType', 'Only .JPG, .JPEG, .PNG accepted', (file) =>
                file ? COVER_FILE_SUPPORTED_FORMATS.includes(file.type) : true
            ),
        audioFile: Yup.mixed()
            .required('An audio file is required')
            .test(
                'audioFileSize',
                'File size too large, max file size is 31 Mb',
                (file) => (file ? file.size <= AUDIO_FILE_SIZE : true)
            )
            .test(
                'audioFileType',
                'Only .MP3, .WAV, .X-AIFF, audio/mp4 accepted',
                (file) =>
                    file
                        ? AUDIO_FILE_SUPPORTED_FORMATS.includes(file.type)
                        : true
            ),
    })

    const responseMessageHandler = () => {
        if (Array.isArray(responseMessage)) {
            return (
                <>
                    {responseMessage.map(function (message, index) {
                        return (
                            <>
                                <Text key={index} style={{ color: 'red' }}>
                                    {message}
                                </Text>
                            </>
                        )
                    })}
                </>
            )
        } else {
            return <Text style={{ color: 'red' }}>{responseMessage}</Text>
        }
    }
    //#endregion
    return (
        <Formik
            enableReinitialize={true}
            initialValues={
                podcastData
                    ? podcastData
                    : {
                          title: '',
                          description: '',
                          episode: 0,
                          coverFile: undefined,
                          audioFile: undefined,
                      }
            }
            //validationSchema={podcastValidationSchema}
            onSubmit={async ({
                title,
                description,
                episode,
                coverFile,
                audioFile,
            }) => {
                const token = await getValueFor('jwtToken')
                const currentUserId = await getValueFor('currentUserId')

                const allData = new FormData()

                allData.append('coverFile', selectedCoverFile) // name of file for interception
                allData.append('audioFile', selectedAudioFile)
                allData.append('title', title)
                allData.append('description', description)
                allData.append('episode', episode)
                allData.append('creatorId', currentUserId)
                const response = await axios({
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        authorization: `Bearer ${token}`,
                    },
                    method: 'post',
                    url: `http://192.168.0.9:3001/user-podcast`,
                    data: allData,
                })
                    .then(function (response) {
                        setUserPodcastsUpdated(true)
                        props.navigation.navigate('Dashboard')
                    })
                    .catch(function (error) {
                        setErrors(true)
                        setResponseMessage(error.response.data.error)
                    })
                Keyboard.dismiss()
            }}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                values,
            }) => (
                <View style={{ margin: 10, padding: 10 }}>
                    <View style={{ fontSize: 10 }}>
                        {responseMessage && errors
                            ? responseMessageHandler()
                            : null}
                    </View>
                    <InputField
                        label="Title"
                        name="title"
                        value={values.title}
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('title')}
                    />

                    <InputField
                        label="Description"
                        name="description"
                        value={values.description}
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                    />
                    <InputField
                        label="Episode"
                        name="episode"
                        value={values.episode.toString()}
                        onChangeText={handleChange('episode')}
                        onBlur={handleBlur('episode')}
                        keyboardType="numeric"
                    />
                    <C_Button
                        title="Select Cover"
                        backgroundColor={globalColors.gray_default}
                        onPress={pickPodcastCoverFile}
                    />
                    <C_Button
                        title="Select Audio"
                        backgroundColor={globalColors.gray_default}
                        onPress={pickPodcastAudioFile}
                    />

                    <C_Button
                        title="Save Changes"
                        loading={isSubmitting}
                        onPress={handleSubmit}
                    />
                </View>
            )}
        </Formik>
    )
}

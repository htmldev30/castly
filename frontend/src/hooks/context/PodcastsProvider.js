import React, { createContext, useState, useEffect } from 'react'
import {
    checkAuthentication,
    getValueFor,
} from '../../shared/UserAuthentication'
import axios from 'axios'

export const PodcastsContext = createContext()

const PodcastsProvider = (props) => {
    const isAuthenticated = checkAuthentication()

    let [allUserPodcasts, setAllUserPodcasts] = useState([])
    const [userPodcastsUpdated, setUserPodcastsUpdated] = useState(false)
    useEffect(() => {
        if (isAuthenticated || userPodcastsUpdated) {
            getAllUserPodcasts()
        }
    }, [isAuthenticated, userPodcastsUpdated])
    const getAllUserPodcasts = async () => {
        try {
            let mounted = true
            const token = await getValueFor('jwtToken')
            const currentUserId = await getValueFor('currentUserId')
            const response = await axios({
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    authorization: `Bearer ${token}`,
                },
                method: 'get',
                url: `http://192.168.0.9:3001/user-podcast/${currentUserId}`,
            })
                .then(function (response) {
                    return response
                })
                .then(function (response) {
                    const allUserPodcasts = response.data.allUserPodcasts
                    setAllUserPodcasts(allUserPodcasts)
                    setUserPodcastsUpdated(false)
                })
            return () => (mounted = false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <PodcastsContext.Provider
            value={{ allUserPodcasts, setUserPodcastsUpdated }}
        >
            {props.children}
        </PodcastsContext.Provider>
    )
}

export default PodcastsProvider

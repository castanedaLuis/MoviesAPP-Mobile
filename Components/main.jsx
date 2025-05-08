import Constants from 'expo-constants';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { fetchingData } from '../lib/movies'
import { AmimatedCardMovie } from './MovieCard';

const urlMovies = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=';
export const searchMoviesURL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=';
export const optionsHeaders = {
    headers: {
        'Content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': `Bearer ${Constants.expoConfig.extra.token}`,
    }
}

export function Main() {
    const [moviesAPI, setMoviesAPI] = useState([])
    const [page, setPage] = useState(1);

    const fetchMovies = () => {
        fetchingData(urlMovies + page, optionsHeaders).then((data) => {
            setMoviesAPI(data);
        }).catch((error) => {
            console.error("Error fetching movies:", error.message);
        })
    };

    useEffect(() => {
        fetchMovies();
    },);

    return (
        <View style={{ backgroundColor: '#000' }}>
            {
                moviesAPI.length === 0 ? (
                    <ActivityIndicator size="large" color="#fff" />
                ) : (
                    <>
                        <FlatList
                            data={moviesAPI}
                            key={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <AmimatedCardMovie movie={item} index={item.id} />
                            )}
                        />
                    </>
                )
            }
        </View>
    );
}


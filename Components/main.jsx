import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import { fetchingData } from '../lib/movies'
import { AmimatedCardMovie } from './MovieCard';

const urlMovies = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=';
const searchMovies = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=';
const optionsHeaders = {
    headers: {
        'Content-type': 'application/json',
        'accept': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGFkNjNlOTM1YmRkMThiOTg3ZTZkOGM3ZGZhZjlhMiIsIm5iZiI6MTYzNjY5MzU4NS42NzUsInN1YiI6IjYxOGRmNjUxMjBlNmE1MDA5MThkNjgyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P1e1hip1zJOZilusm2V7bus4ZEndVPaA4U40UCFEXMU'
    }
}

export function Main() {
    const insets = useSafeAreaInsets();
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
        <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <Text style={{ color: '#fff', fontSize: 24, marginBottom: 20 }}>Popular Movies</Text>
            {
                moviesAPI.length === 0 ? (
                    <ActivityIndicator size="large" color="#fff" />
                ) : (
                    <>
                        <Text style={{ color: '#fff', fontSize: 16 }}>Total Movies: {moviesAPI.length}</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
    },
    movieContainer: {
        margin: 10,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        padding: 10,
        width: 120,
        height: 200,
        shadowColor: '#000',
    },
    movieTitle: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
    },
    movieImage: {
        width: 100,
        height: 150,
    },
});

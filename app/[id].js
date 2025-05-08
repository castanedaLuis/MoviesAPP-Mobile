import { View, Text, ActivityIndicator, ScrollView, Image } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { ScreenLayout } from "../Components/ScreenLayout";
import { useState, useEffect } from "react";
import { searchMoviesURL, optionsHeaders } from "../Components/main";
import { getColor } from "../Components/MovieCard";
const getColorToVotes = (vote) => {
    if (vote >= 800) {
        return '#00FF00'; // Green
    } else if (vote >= 500) {
        return '#FFFF00'; // Yellow
    } else {
        return '#FF0000'; // Red
    }
}
export default function DetailsMovie() {
    const { id } = useLocalSearchParams();
    const [infoMovie, setInfoMovie] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchMovieDetails = async () => {
                try {
                    const response = await fetch(`${searchMoviesURL}${id}`, optionsHeaders);
                    const data = await response.json();
                    setInfoMovie(data?.results);
                } catch (error) {
                    console.error("Error fetching movie details:", error);
                }
            };

            fetchMovieDetails();
        }

    }, [id])
    console.log(infoMovie);

    return (
        <ScreenLayout>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: '#ffee00' },
                    headerTintColor: "#000",
                    headerLeft: () => null,
                    headerRight: () => <Text style={{ color: '#000', fontSize: 24, marginBottom: 20 }}>Details Movie</Text>,
                }}
            />
            {
                infoMovie === null ? (
                    <ActivityIndicator size="large" color="#fff" />
                ) :
                    (
                        <ScrollView>
                            <View style={{ backgroundColor: '#000', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={{ uri: `https://image.tmdb.org/t/p/w500/${infoMovie[0]?.poster_path}` }}
                                    style={{ width: 200, height: 300, borderRadius: 10 }}
                                />
                                <Text className="mb-6" style={{ color: getColor(infoMovie[0]?.vote_average) }}>Votación: {infoMovie[0]?.vote_average}</Text>
                                <Text className="mb-6" style={{ color: getColor(infoMovie[0]?.vote_average) }}>Popularidad: {infoMovie[0]?.popularity}</Text>
                                <Text style={{ color: '#fff', fontSize: 18 }}>Para adulto: {infoMovie[0]?.adult}</Text>
                                <Text style={{ color: 'green', fontSize: 18 }}>Lanzamiento: {infoMovie[0]?.release_date}</Text>
                                <Text style={{ color: getColorToVotes(infoMovie[0]?.vote_count), fontSize: 18 }}>Total de votos: {infoMovie[0]?.vote_count}</Text>
                                <Text style={{ color: '#fff', fontSize: 18 }}>{infoMovie[0]?.title}</Text>
                                <Text style={{ color: 'gray', fontSize: 12 }}>{infoMovie[0]?.overview}</Text>
                            </View>
                            <Text style={{ color: '#fff', fontSize: 18 }}>Movie ID: {infoMovie[0]?.id}</Text>
                        </ScrollView>
                    )
            }
        </ScreenLayout>
    )
}
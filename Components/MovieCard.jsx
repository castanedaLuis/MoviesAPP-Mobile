import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';

export function MovieCard({ movie }) {
    const getColor = (vote) => {
        if (vote >= 7) {
            return '#00FF00'; // Green
        } else if (vote >= 5) {
            return '#FFFF00'; // Yellow
        } else {
            return '#FF0000'; // Red
        }
    }
    const color = getColor(movie.vote_average);
    return (
        <View
            className="flex-row bg-slate-500/100 rounded-lg p-2 w-28 h-52 shadow-lg"
            style={styles.movieContainer}
        >
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={styles.movieImage}
            />
            <View style={styles.movieInfo}>

                <Text className="mb-6" style={styles.movieTitle}>{movie.title}</Text>
                <Text className="mb-6" style={{ color: color }}>{movie.vote_average}</Text>
                <Text className="text-sm text-white" style={styles.movieDescription} >{movie.overview}</Text>
            </View>
        </View>
    )
}

export function AmimatedCardMovie({ movie, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [index, opacity]);

    return (
        <Animated.View style={{ opacity }}>
            <MovieCard movie={movie} />
        </Animated.View>
    );
}
const styles = StyleSheet.create({
    movieContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        gap: 10,
        marginBottom: 10,
        padding: 10,
    },
    movieInfo: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        overflow: 'hidden',
    },
    movieTitle: {
        color: '#fff',
        fontSize: 18,
    },
    movieDescription: {
        color: '#fff',
        fontSize: 12,
    },
    movieImage: {
        width: 107,
        height: 147,
        borderRadius: 10,
    },
});
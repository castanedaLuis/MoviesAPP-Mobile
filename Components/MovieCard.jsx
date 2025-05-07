import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated } from 'react-native';

export function MovieCard({ movie }) {
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
                <Text className="text-sm text-white" style={styles.movieDescription}>{movie.overview}</Text>
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
        margin: 10,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        gap: 10,
    },
    movieInfo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    movieTitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 5,
    },
    movieDescription: {
        color: '#fff',
        fontSize: 12,
        marginBottom: 5,
        flexShrink: 1,
    },
    movieImage: {
        width: 107,
        height: 147,
        borderRadius: 10,
    },
});
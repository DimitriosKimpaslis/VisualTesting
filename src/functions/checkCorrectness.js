const typesExtended = {
    INTP: {
        jugement: 'Ti/Fe',
        perception: 'Si/Ne',
    },
    ENTP: {
        jugement: 'Ti/Fe',
        perception: 'Si/Ne',
    },
    ISFJ: {
        jugement: 'Ti/Fe',
        perception: 'Si/Ne',
    },
    ESFJ: {
        jugement: 'Ti/Fe',
        perception: 'Si/Ne',
    },
    ISTP: {
        jugement: 'Ti/Fe',
        perception: 'Ni/Se',
    },
    ESTP: {
        jugement: 'Ti/Fe',
        perception: 'Ni/Se',
    },
    INFJ: {
        jugement: 'Ti/Fe',
        perception: 'Ni/Se',
    },
    ENFJ: {
        jugement: 'Ti/Fe',
        perception: 'Ni/Se',
    },
    INTJ: {
        jugement: 'Fi/Te',
        perception: 'Ni/Se',
    },
    ENTJ: {
        jugement: 'Fi/Te',
        perception: 'Ni/Se',
    },
    ISFP: {
        jugement: 'Fi/Te',
        perception: 'Ni/Se',
    },
    ESFP: {
        jugement: 'Fi/Te',
        perception: 'Ni/Se',
    },
    ISTJ: {
        jugement: 'Fi/Te',
        perception: 'Si/Ne',
    },
    ESTJ: {
        jugement: 'Fi/Te',
        perception: 'Si/Ne',
    },
    INFP: {
        jugement: 'Fi/Te',
        perception: 'Si/Ne',
    },
    ENFP: {
        jugement: 'Fi/Te',
        perception: 'Si/Ne',
    },
}


export const checkCorrectness = (typeAnswered, correctAnswer) => {
    const jugementAnswered = typesExtended[typeAnswered].jugement
    const jugementCorrect = typesExtended[correctAnswer].jugement
    const perceptionAnswered = typesExtended[typeAnswered].perception
    const perceptionCorrect = typesExtended[correctAnswer].perception

    if (jugementAnswered === jugementCorrect){
        return 'You were right about the judgment axis though'
    }else if (perceptionAnswered === perceptionCorrect){
        return 'You were right about the perception axis though'
    }else{
        return 'You were wrong about both axes'
    }
}
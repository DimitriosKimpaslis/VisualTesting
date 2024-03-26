export const getQuadra = (type) => {
    if (type === 'INTP' || type === 'ENTP' || type === 'ISFJ' || type === 'ESFJ') {
        return 'SFJ-NTP'
    } else if (type === 'ISTP' || type === 'ESTP' || type === 'INFJ' || type === 'ENFJ') {
        return 'NFJ-STP'
    } else if (type === 'INTJ' || type === 'ENTJ' || type === 'ISFP' || type === 'ESFP') {
        return 'NTJ-SFP'
    } else if (type === 'ISTJ' || type === 'ESTJ' || type === 'INFP' || type === 'ENFP') {
        return 'STJ-NFP'
    }
}
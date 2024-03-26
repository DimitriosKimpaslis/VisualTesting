
export const checkIfAllTagsAreFalse = (tags) => {
    for (const tag in tags) {
        if (tags[tag]) return false
    }
    return true
}

//Quadra Clicked////////////////////////////////////////////////////////////////////////////////

const quadraNetwork = {
    SFJ_NTP: ['SFJ_NTP', 'Ti_Fe', 'Si_Ne'],
    NFJ_STP: ['NFJ_STP', 'Ti_Fe', 'Ni_Se'],
    NTJ_SFP: ['NTJ_SFP', 'Fi_Te', 'Ni_Se'],
    STJ_NFP: ['STJ_NFP', 'Fi_Te', 'Si_Ne'],
}

const quadraTypesNetwork = {
    SFJ_NTP: ['INTP','ENTP','ISFJ','ESFJ'],
    NFJ_STP: ['INFJ','ENFJ','ISTP','ESTP'],
    NTJ_SFP: ['ESFP','ISFP','ENTJ','INTJ'],
    STJ_NFP: ['ISTJ','ESTJ','INFP','ENFP'],
}

const returnAllFalseTags = () => {
    return { SFJ_NTP: false, NFJ_STP: false, NTJ_SFP: false, STJ_NFP: false, Ti_Fe: false, Fi_Te: false, Ni_Se: false, Si_Ne: false }
}

const returnAllTrueTypes = () => {
    return { INTP: true, ENTP: true, ISFJ: true, ESFJ: true, ISTP: true, ESTP: true, INFJ: true, ENFJ: true, INTJ: true, ENTJ: true, ISFP: true, ESFP: true, ISTJ: true, ESTJ: true, INFP: true, ENFP: true }
}


const checkIfTagClickedIsQuadraOrAxis = (lastTagClicked) => {
    let quadraOrAxis = ''
    for(const quadra in quadraNetwork){
        if(lastTagClicked === quadra){
            quadraOrAxis = 'quadra'
        }
    }
    if(!quadraOrAxis){
        quadraOrAxis = 'axis'
    }
    return quadraOrAxis
}

const setNewTagsAndTypesOnQuadra = (tags,types, lastTagClicked) => {
    if(tags[lastTagClicked] === true){
        const newTags = returnAllFalseTags()
        const newAvailableTypes = returnAllTrueTypes()
        return {newTags,newAvailableTypes}
    }

    let newAvailableTypes = types
    const typesToSetToTrue = quadraTypesNetwork[lastTagClicked]
    typesToSetToTrue.forEach((type) => {
        newAvailableTypes[type] = true
    })
    
    let newTags = tags
    const tagsToChange = quadraNetwork[lastTagClicked]
    for(const tag in newTags){
        if(tagsToChange.includes(tag)){
            newTags[tag] = true
        }else{
            newTags[tag] = false
        }
    }
    return {newTags,newAvailableTypes}
}

//Axis clicked /////////////////////////////////////////////////////////////////////////////////////

const axisNetwork = {
    0: {
        Ti_Fe: [`INTP`, `ENTP`, `ISFJ`, `ESFJ`, `ISTP`,`ESTP`,`INFJ`,`ENFJ`],
        Fi_Te: [`INFP`, `ENFP`, `ISTJ`, `ESTJ`, `ISFP`, `ESFP`, `INTJ`, `ENTJ`],
        Si_Ne: [`INTP`, `ENTP`, `ISFJ`, `ESFJ`, `INFP`, `ENFP`, `ISTJ`, `ESTJ`],
        Ni_Se: [`INTJ`, `ENTJ`, `ISFP`, `ESFP`, `INFJ`, `ENFJ`, `ISTP`, `ESTP`]
    },
}

const quadraAxis = {
    SFJ_NTP: ['Ti_Fe', 'Si_Ne'],
    NFJ_STP: ['Ti_Fe', 'Ni_Se'],
    NTJ_SFP: ['Fi_Te', 'Ni_Se'],
    STJ_NFP: ['Fi_Te', 'Si_Ne'],
}

const axisReverse = {
    Ti_Fe: 'Fi_Te',
    Fi_Te: 'Ti_Fe',
    Si_Ne: 'Ni_Se',
    Ni_Se: 'Si_Ne'
}

const axis = ['Ti_Fe','Fi_Te','Si_Ne','Ni_Se']

const checkIfDiffrentAxisIsChosen = (axisTurnedOn, lastTagClicked) => {
    if(axisTurnedOn === 'Ti_Fe' && lastTagClicked === 'Fi_Te'){
        return true
    }else if(axisTurnedOn === 'Fi_Te' && lastTagClicked === 'Ti_Fe'){
        return true
    }else if(axisTurnedOn === 'Si_Ne' && lastTagClicked === 'Ni_Se'){
        return true
    }
    else if(axisTurnedOn === 'Ni_Se' && lastTagClicked === 'Si_Ne'){
        return true
    }
    return false
}

const extractOnlyAxisFromTags = (tags) => {
    let tagsToReturn = {}
    for(const tag in tags){
        if(axis.includes(tag)){
            tagsToReturn[tag] = tags[tag]
        }
    }
    return tagsToReturn
}

const whichAxisIsTurned = (axisTags) => {
    let axisTurnedOnArray = []
    for(const axis in axisTags){
        if(axisTags[axis]){
            axisTurnedOnArray.push(axis)
        }
    }
    return axisTurnedOnArray
}

const handleAxisNewTagsAndTypes0 = (tags,types, lastTagClicked) => {
    tags[lastTagClicked] = true
    const typesToSetToTrue = axisNetwork[0][lastTagClicked]
    typesToSetToTrue.forEach((type) => {
        types[type] = true
    })
    return {tags,types}
}

const handleAxisNewTagsAndTypes1 = (tags,types, lastTagClicked,axisTurnedOn) => {

    //Click on axis that is already turned on
    if(tags[lastTagClicked]){
        tags[lastTagClicked] = false
        types = returnAllTrueTypes()
        return {tags,types}
    }
    //Click on axis that is not turned on but the reverse axis is turned on
    if(checkIfDiffrentAxisIsChosen(axisTurnedOn[0],lastTagClicked)){
        tags = returnAllFalseTags()
        tags[lastTagClicked] = true
        types = axisNetwork[0][lastTagClicked]
        types.forEach((type) => {
            types[type] = true
        })
        return {tags,types}
    }   
    //Click on axis that is not turned on and another axis is turned on
    let quadraChosen = ''
    for(const quadra in quadraAxis){
        if(quadraAxis[quadra].every((axis) => [axisTurnedOn[0], lastTagClicked].includes(axis))){
            quadraChosen = quadra
        }
    }
    const typesToSetToTrue = quadraTypesNetwork[quadraChosen]
    typesToSetToTrue.forEach((type) => {
        types[type] = true
    })
    
    const tagsToChange = quadraNetwork[quadraChosen]
    for(const tag in tags){
        if(tagsToChange.includes(tag)){
            tags[tag] = true
        }else{
            tags[tag] = false
        }
    }
    return {tags,types}
}

const handleAxisNewTagsAndTypes2 = (tags,types, lastTagClicked, axisTurnedOn) => {
    //Click on axis that is already turned on
    if(tags[lastTagClicked]){
        tags = returnAllFalseTags()
        const secondAxis = axisTurnedOn.filter((axis) => axis !== lastTagClicked)[0]
        tags[secondAxis] = true
        const typesToSetToTrue = axisNetwork[0][secondAxis]
        typesToSetToTrue.forEach((type) => {
            types[type] = true
        })
        return {tags,types}
    }
    //Click a third axis
    let axisToTurnOff = axisReverse[lastTagClicked]
    axisTurnedOn = axisTurnedOn.filter((axis) => axis !== axisToTurnOff)
    tags[axisToTurnOff] = false
    let quadraChosen = ''
    for(const quadra in quadraAxis){
        if(quadraAxis[quadra].every((axis) => [axisTurnedOn[0], lastTagClicked].includes(axis))){
            quadraChosen = quadra
        }
    }
    const typesToSetToTrue = quadraTypesNetwork[quadraChosen]
    typesToSetToTrue.forEach((type) => {
        types[type] = true
    })
    
    const tagsToChange = quadraNetwork[quadraChosen]
    for(const tag in tags){
        if(tagsToChange.includes(tag)){
            tags[tag] = true
        }else{
            tags[tag] = false
        }
    }
    return {tags,types}
}   



export const returnNewAvailableTypesAndTags = (tags, lastTagClicked) => {

    let newTags = tags
    let newAvailableTypes = { INTP: false, ENTP: false, ISFJ: false, ESFJ: false, ISTP: false, ESTP: false, INFJ: false, ENFJ: false, INTJ: false, ENTJ: false, ISFP: false, ESFP: false, ISTJ: false, ESTJ: false, INFP: false, ENFP: false }


    const quadraOrAxis = checkIfTagClickedIsQuadraOrAxis(lastTagClicked)


    if(quadraOrAxis === 'quadra'){

        const newTagsAndTypes = setNewTagsAndTypesOnQuadra(newTags,newAvailableTypes,lastTagClicked)
        newTags = newTagsAndTypes.newTags
        newAvailableTypes = newTagsAndTypes.newAvailableTypes

    }else{

        const onlyAxisTags = extractOnlyAxisFromTags(newTags)
        const axisTurnedOnArray = whichAxisIsTurned(onlyAxisTags)

        if(axisTurnedOnArray.length === 0){
            const newTagsAndTypes = handleAxisNewTagsAndTypes0(newTags,newAvailableTypes,lastTagClicked)
            newTags = newTagsAndTypes.tags
            newAvailableTypes = newTagsAndTypes.types
        }else if(axisTurnedOnArray.length === 1){
            const newTagsAndTypes = handleAxisNewTagsAndTypes1(newTags,newAvailableTypes,lastTagClicked,axisTurnedOnArray)
            newTags = newTagsAndTypes.tags
            newAvailableTypes = newTagsAndTypes.types
        }else if(axisTurnedOnArray.length === 2){
            const newTagsAndTypes = handleAxisNewTagsAndTypes2(newTags,newAvailableTypes,lastTagClicked,axisTurnedOnArray)
            newTags = newTagsAndTypes.tags
            newAvailableTypes = newTagsAndTypes.types
        }
    }
    return { newAvailableTypes, newTags }
}


import supabase from "../components/root/Client"

export const getTestingMaterial = async (userEmail) => {

    if (userEmail === null) {
        window.location.href = '/signin'
    }

    const { data: answers, error: error2 } = await supabase
        .from('data')
        .select('celebrity_id')
        .eq('user_email', userEmail)
    if (error2) {
        throw new Error(error2)
    }
    
    const valuesArray = answers.map(answer => answer.celebrity_id)
    let ids = valuesArray

    // If the ids are an empty array it will just return 10 random ids
    let { data, error } = await supabase.rpc('get_random_ids', { ids })
    if (error) {
        throw new Error(error)
    }

    const contextValuesArray = data.map(random => random.id)
    return contextValuesArray
}
import supabase from "../components/root/Client"

export const getAllUserData = async (email) => {
    if(!email) return
    const { data, error } = await supabase
        .from('data')
        .select('*')
        .eq('user_email', email)
    if (error) {
        console.log(error)
    }
    return data
}

const returnFakeData = () => {
    return [
        {
            "id": 21,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 83,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-06T21:26:37.475912+00:00",
            "celebrity_type": "ISFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 22,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 274,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-06T21:26:42.558833+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 23,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 588,
            "answer_quadra": "STJ-NFP",
            "answer_type": "INFP",
            "result": false,
            "created_at": "2023-11-06T21:26:56.594335+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 24,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 269,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-06T21:27:14.866085+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 25,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 237,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-06T21:27:19.33913+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 26,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 980,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-06T21:27:25.386509+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 27,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 621,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ENTJ",
            "result": false,
            "created_at": "2023-11-06T21:27:41.544503+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 28,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 452,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": true,
            "created_at": "2023-11-06T21:27:49.013386+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 29,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1026,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-06T21:27:53.557205+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 30,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 283,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-06T21:27:58.91123+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 31,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 409,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-06T21:36:51.334957+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 32,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 886,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-06T21:36:56.449352+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 33,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 393,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-06T21:36:59.128291+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 34,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1032,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ENFP",
            "result": false,
            "created_at": "2023-11-06T21:37:04.051164+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 35,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 466,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-06T21:37:06.629757+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 36,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 704,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": false,
            "created_at": "2023-11-06T21:37:08.583584+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 37,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 681,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-06T21:37:12.431768+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 38,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 503,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-06T21:37:14.039312+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 39,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 641,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-06T21:38:57.953515+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 40,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 962,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ENFJ",
            "result": false,
            "created_at": "2023-11-06T21:39:11.728031+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 41,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1046,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-06T21:39:40.858041+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 42,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 580,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-06T21:41:06.629014+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 43,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 685,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-06T21:43:14.613896+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 44,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 129,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ESFP",
            "result": false,
            "created_at": "2023-11-06T21:43:21.961334+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 45,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 143,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": true,
            "created_at": "2023-11-06T21:43:28.849775+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 46,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 38,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": false,
            "created_at": "2023-11-06T21:43:50.759026+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 47,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 209,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-06T21:43:55.13768+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 48,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 327,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-06T21:43:59.669725+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 49,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 696,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ESFP",
            "result": true,
            "created_at": "2023-11-06T21:44:33.715454+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 50,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 404,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ESFP",
            "result": false,
            "created_at": "2023-11-06T21:44:45.04053+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 51,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 317,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-06T21:44:57.156229+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 52,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 326,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-06T21:45:09.177896+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 53,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 435,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ENFJ",
            "result": false,
            "created_at": "2023-11-06T21:45:21.762766+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 54,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 196,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-06T21:45:27.097689+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 55,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1050,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-06T21:45:38.824502+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 56,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 376,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": true,
            "created_at": "2023-11-06T21:45:43.190637+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 57,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1036,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": true,
            "created_at": "2023-11-06T21:46:09.513698+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 58,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 194,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-06T21:46:19.192545+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 59,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 276,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-06T21:46:48.5433+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 60,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 966,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-06T21:47:04.271696+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 61,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 330,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": true,
            "created_at": "2023-11-10T21:16:49.844327+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 62,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 556,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": true,
            "created_at": "2023-11-10T21:16:54.167184+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 63,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 240,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-10T21:17:02.490392+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 64,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1078,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-10T21:17:13.087732+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 65,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 275,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-10T21:17:24.693013+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 66,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 329,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T21:17:28.206367+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 67,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1023,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": true,
            "created_at": "2023-11-10T21:18:51.368472+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 68,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1137,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T21:18:56.069829+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 69,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 662,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": true,
            "created_at": "2023-11-10T21:18:59.908445+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 70,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 610,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ISTJ",
            "result": false,
            "created_at": "2023-11-10T21:19:20.171193+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 71,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1017,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-10T21:27:45.042413+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 72,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 508,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-10T21:27:52.379559+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 73,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 727,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ENFJ",
            "result": false,
            "created_at": "2023-11-10T21:27:58.521421+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 74,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 337,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-10T21:28:06.551622+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 75,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 997,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-10T21:28:17.263427+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 76,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 318,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T21:28:46.786473+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 77,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 478,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-10T21:28:54.479749+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 78,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 631,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-10T21:29:48.242656+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 79,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 226,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-10T21:30:05.857213+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 80,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 219,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T21:30:15.471613+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 81,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 684,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-10T21:30:17.828728+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 82,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 509,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-10T21:30:21.436493+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 83,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 94,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-10T21:30:24.687864+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 84,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 126,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T21:31:01.497698+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 85,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 728,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-10T21:31:06.958875+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 86,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 345,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T21:31:17.918723+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 87,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 873,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-10T21:31:22.442446+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 88,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 450,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T21:31:36.724351+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 89,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 85,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-10T21:31:40.919562+00:00",
            "celebrity_type": "ISFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 90,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 348,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-10T21:31:44.154928+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 91,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1147,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ENTJ",
            "result": true,
            "created_at": "2023-11-10T21:31:47.548678+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 92,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 757,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T21:31:51.665851+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 93,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 674,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T21:31:58.030266+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 94,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 938,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-10T21:32:01.492374+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 95,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 536,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T21:32:05.16837+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 96,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 657,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": true,
            "created_at": "2023-11-10T21:32:13.092951+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 97,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 946,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-10T21:32:16.41316+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 98,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 895,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T21:32:22.386804+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 99,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 350,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T21:32:28.213985+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 100,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 628,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T21:32:35.306005+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 101,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 490,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": true,
            "created_at": "2023-11-10T21:32:44.368531+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 102,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 595,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-10T21:32:56.22544+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 103,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 729,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T22:56:52.615759+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 104,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 762,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-10T22:56:57.372306+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 105,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 383,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-10T22:56:59.96506+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 106,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 256,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-10T22:58:33.227609+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 107,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1190,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T22:59:29.516479+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 108,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1038,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:03:35.543911+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 109,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1022,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": true,
            "created_at": "2023-11-10T23:03:41.13265+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 110,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 868,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T23:05:05.227616+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 111,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 551,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T23:05:09.676691+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 112,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 252,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-10T23:06:13.233721+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 113,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 379,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-10T23:06:32.063031+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 114,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 862,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-10T23:19:29.890131+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 115,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 358,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T23:19:57.505162+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 116,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 616,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:20:14.026545+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 117,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 780,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-10T23:20:40.92243+00:00",
            "celebrity_type": "ENFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 118,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1132,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:20:49.625301+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 119,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1125,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T23:21:01.287576+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 120,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1129,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:21:04.541486+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 121,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 624,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:21:07.687298+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 122,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 840,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-10T23:21:11.811899+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 123,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 537,
            "answer_quadra": "STJ-NFP",
            "answer_type": "INFP",
            "result": true,
            "created_at": "2023-11-10T23:21:30.785009+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 124,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 608,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-10T23:21:42.037907+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 125,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 655,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": true,
            "created_at": "2023-11-10T23:24:08.938291+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 126,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 427,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-10T23:24:12.798293+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 127,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 254,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-10T23:24:59.161488+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 128,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 242,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ENFP",
            "result": false,
            "created_at": "2023-11-10T23:25:02.83761+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 129,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 775,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ESFP",
            "result": true,
            "created_at": "2023-11-10T23:25:27.215468+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 130,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 796,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ENTJ",
            "result": false,
            "created_at": "2023-11-10T23:26:04.515444+00:00",
            "celebrity_type": "ENFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 131,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 521,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T23:26:20.987961+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 132,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 282,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T23:26:38.905777+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 133,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 422,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T23:27:09.991498+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 134,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 933,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-10T23:27:19.478229+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 135,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 457,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": false,
            "created_at": "2023-11-10T23:29:37.419996+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 136,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 963,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-10T23:29:56.862393+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 137,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 313,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T23:30:07.760374+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 138,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 91,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:30:27.740614+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 139,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1085,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:30:40.603831+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 140,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 699,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ESFP",
            "result": true,
            "created_at": "2023-11-10T23:30:50.941083+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 141,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1107,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-10T23:31:18.056308+00:00",
            "celebrity_type": "ENFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 142,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 35,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T23:31:31.534659+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 143,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 794,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:31:48.29436+00:00",
            "celebrity_type": "ENFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 144,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 644,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T23:31:59.571435+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 145,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 832,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-10T23:32:17.843099+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 146,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 223,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-10T23:32:38.165395+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 147,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 605,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-10T23:32:59.662488+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 148,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 14,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:33:14.099333+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 149,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 210,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ENTJ",
            "result": false,
            "created_at": "2023-11-10T23:34:02.576587+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 150,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1082,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-10T23:34:13.051129+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 151,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 246,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ENFJ",
            "result": false,
            "created_at": "2023-11-10T23:34:44.648075+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 152,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1055,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:35:31.776782+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 153,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 448,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": true,
            "created_at": "2023-11-10T23:36:01.048663+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 154,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 32,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ISTJ",
            "result": true,
            "created_at": "2023-11-10T23:36:48.307587+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 155,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 442,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": true,
            "created_at": "2023-11-10T23:37:23.186995+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 156,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 229,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-10T23:37:48.189316+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 157,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 902,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-10T23:38:10.223564+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 158,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 483,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T23:38:24.976963+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 159,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 30,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-10T23:38:48.614794+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 160,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 546,
            "answer_quadra": "STJ-NFP",
            "answer_type": "INFP",
            "result": true,
            "created_at": "2023-11-10T23:38:58.768512+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 161,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1172,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-10T23:39:36.027673+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 162,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 114,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-10T23:39:49.881138+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 163,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 751,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-10T23:39:58.543741+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 164,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1077,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T23:40:12.665206+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 165,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 826,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T23:40:39.000776+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 166,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 742,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ESFP",
            "result": true,
            "created_at": "2023-11-10T23:41:04.039913+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 167,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 181,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-10T23:41:22.315644+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 168,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 118,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": true,
            "created_at": "2023-11-10T23:41:54.826418+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 169,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 643,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T23:42:35.100898+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 170,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 201,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-10T23:43:16.636025+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 171,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 845,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-10T23:43:27.396596+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 172,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 920,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ENTJ",
            "result": false,
            "created_at": "2023-11-10T23:43:45.874395+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 173,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 193,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": false,
            "created_at": "2023-11-10T23:44:49.405351+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 174,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 882,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-10T23:44:57.187521+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 175,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 419,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:46:20.012311+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 176,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 570,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T23:47:09.757127+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 177,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 297,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:47:31.500469+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 178,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 926,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-10T23:47:47.443402+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 179,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 342,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-10T23:47:55.374914+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 180,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1089,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-10T23:48:32.925278+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 181,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 19,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T23:49:12.006967+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 182,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 221,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-10T23:50:36.669699+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 183,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 647,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:50:53.201538+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 184,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1014,
            "answer_quadra": "STJ-NFP",
            "answer_type": "INFP",
            "result": false,
            "created_at": "2023-11-10T23:52:10.370789+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 185,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 255,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T23:52:29.96088+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 186,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 36,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-10T23:52:42.045001+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 187,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 128,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-10T23:54:11.840942+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 188,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 359,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": true,
            "created_at": "2023-11-10T23:55:07.800967+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 189,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1130,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-10T23:56:01.836527+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 190,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1005,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": true,
            "created_at": "2023-11-10T23:56:33.906185+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 191,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 190,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-10T23:56:56.171816+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 192,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1139,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T23:57:22.74497+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 193,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 43,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-10T23:57:41.043452+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 194,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 10,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-10T23:58:19.168257+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 195,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 562,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": true,
            "created_at": "2023-11-10T23:58:35.641307+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 196,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 87,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-10T23:59:25.666266+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 197,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 948,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-10T23:59:53.532952+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 198,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 172,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-11T00:00:26.519543+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 199,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 216,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-11T00:01:09.570519+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 200,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 349,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": true,
            "created_at": "2023-11-11T00:01:55.887533+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 201,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 609,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": true,
            "created_at": "2023-11-11T00:02:24.253257+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 202,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 158,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-11T00:03:12.667106+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 203,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 44,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ISTJ",
            "result": true,
            "created_at": "2023-11-11T00:03:59.141389+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 204,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 321,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-11T00:04:09.229892+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 205,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1034,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": false,
            "created_at": "2023-11-11T00:04:27.836966+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 206,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 11,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-11T00:04:47.876246+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 207,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 838,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-11T00:06:14.988113+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 208,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 530,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-11T00:06:45.077637+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 209,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 924,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-11T00:07:11.75043+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 210,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 677,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": true,
            "created_at": "2023-11-11T00:07:45.392486+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 211,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 741,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-11T00:08:37.174492+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 212,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 504,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-11T00:09:06.412982+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 213,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 130,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-11T00:09:37.677402+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 214,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 55,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ENFP",
            "result": false,
            "created_at": "2023-11-11T00:10:06.912436+00:00",
            "celebrity_type": "ISFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 215,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 577,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-11T00:10:23.964922+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 216,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 806,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-11T00:11:16.280893+00:00",
            "celebrity_type": "ENFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 217,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 814,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-11T00:11:42.828722+00:00",
            "celebrity_type": "ENFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 218,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 849,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-11T00:11:54.533867+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 219,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 735,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ESFP",
            "result": true,
            "created_at": "2023-11-11T00:12:16.901652+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 220,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1027,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-11T00:12:49.26899+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 221,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 117,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": true,
            "created_at": "2023-11-11T00:13:42.641076+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 222,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 619,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": true,
            "created_at": "2023-11-11T00:14:07.813909+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 223,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 124,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-11T00:14:27.374602+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 224,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 915,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-11T00:14:46.446941+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 225,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 758,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-11T00:14:57.779193+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 226,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1131,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-11T00:15:11.050252+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 227,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 484,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": true,
            "created_at": "2023-11-11T00:15:20.742234+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 228,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1173,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-11T00:15:46.615103+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 229,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 939,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-11T00:16:17.19909+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 230,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 818,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-11T00:17:00.329026+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 231,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 29,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-11T00:17:33.282948+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 232,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 197,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-11T00:17:50.743561+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 233,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 745,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-11T00:18:07.92908+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 234,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 214,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-11T00:18:50.758352+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 235,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 429,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-11T00:19:20.84233+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 236,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 576,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-11T00:20:08.838065+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 237,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 572,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ISTJ",
            "result": false,
            "created_at": "2023-11-11T00:20:24.510924+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 238,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1083,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-11T00:20:39.839661+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 239,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 362,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ISTJ",
            "result": false,
            "created_at": "2023-11-11T00:21:20.587006+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 240,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 650,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-11T00:21:37.186773+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 241,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 106,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": true,
            "created_at": "2023-11-11T00:22:29.831499+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 242,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 620,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-11T00:22:48.469824+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 243,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 497,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-11T00:23:12.625498+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 244,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1105,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-11T00:23:21.171419+00:00",
            "celebrity_type": "ENFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 245,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 970,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-11T00:23:33.042536+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 246,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1185,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-11T00:24:09.820402+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 247,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 62,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-11T00:24:23.936736+00:00",
            "celebrity_type": "ISFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 248,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 61,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ENTJ",
            "result": false,
            "created_at": "2023-11-11T00:24:43.189559+00:00",
            "celebrity_type": "ISFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 249,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 994,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": true,
            "created_at": "2023-11-11T00:24:55.104727+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 250,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 112,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ENFP",
            "result": false,
            "created_at": "2023-11-11T00:25:17.757211+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 251,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 864,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-11T00:25:32.167543+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 252,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 187,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": true,
            "created_at": "2023-11-11T00:25:42.48822+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 253,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1162,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-11T00:25:51.03059+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 254,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 37,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-11T00:26:12.144361+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 255,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 931,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": false,
            "created_at": "2023-11-11T00:26:34.715762+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 256,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 227,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-11T00:27:08.451915+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 257,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 447,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-11T00:27:32.19884+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 258,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 648,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": true,
            "created_at": "2023-11-11T00:27:45.160665+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 259,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 502,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-11T00:29:09.884486+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 260,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1186,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ISTJ",
            "result": false,
            "created_at": "2023-11-11T00:32:41.934374+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 261,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1113,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-11T00:34:10.675767+00:00",
            "celebrity_type": "ENFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 262,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 736,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ENFJ",
            "result": false,
            "created_at": "2023-11-11T00:36:29.92407+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 263,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1061,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-11T00:37:32.106357+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 264,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 146,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-11T00:37:59.802924+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 265,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 976,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-11T00:39:26.645435+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 266,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 990,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": true,
            "created_at": "2023-11-11T00:40:38.140506+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 267,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 41,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ENTJ",
            "result": false,
            "created_at": "2023-11-11T00:44:03.883535+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 268,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1167,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-11T00:44:33.928027+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 269,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 340,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-11T00:45:09.092479+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 270,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 897,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-11T00:45:55.118652+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 271,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 907,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-11T00:46:21.329199+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 272,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 667,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-11T00:46:53.16441+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 273,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 23,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ESFP",
            "result": false,
            "created_at": "2023-11-11T00:47:09.570707+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 274,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1118,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-11T00:47:38.512493+00:00",
            "celebrity_type": "ENFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 275,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 322,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ISTJ",
            "result": false,
            "created_at": "2023-11-11T00:48:02.687097+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 276,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 277,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-11T00:48:53.06258+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 277,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 25,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-11T00:49:22.824043+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 278,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 927,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-11T00:49:38.560553+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 279,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1079,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": true,
            "created_at": "2023-11-11T00:50:45.425379+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 280,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1018,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-11T00:51:32.469579+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 281,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 987,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-11T00:51:59.792928+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 282,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 965,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-11T00:53:03.163914+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 283,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 165,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-11T00:53:32.018604+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 284,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 969,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": true,
            "created_at": "2023-11-11T00:53:58.799393+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 285,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 836,
            "answer_quadra": "STJ-NFP",
            "answer_type": "INFP",
            "result": false,
            "created_at": "2023-11-11T00:54:46.023058+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 286,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 548,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": true,
            "created_at": "2023-11-11T00:55:14.890519+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 287,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 617,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": true,
            "created_at": "2023-11-11T00:55:41.442495+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 288,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 812,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ENFP",
            "result": true,
            "created_at": "2023-11-11T00:56:20.135065+00:00",
            "celebrity_type": "ENFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 289,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 784,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-11T00:57:31.738152+00:00",
            "celebrity_type": "ENFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 293,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 268,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-12T18:44:15.310611+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 294,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 629,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ESFP",
            "result": false,
            "created_at": "2023-11-12T18:46:35.239335+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 295,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1063,
            "answer_quadra": "STJ-NFP",
            "answer_type": "INFP",
            "result": false,
            "created_at": "2023-11-12T18:47:48.288263+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 296,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1135,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ISTJ",
            "result": false,
            "created_at": "2023-11-12T18:52:47.526941+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 297,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 405,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-12T19:05:47.424698+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 298,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 919,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-12T19:05:52.44708+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 299,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 68,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-12T19:06:05.199531+00:00",
            "celebrity_type": "ISFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 300,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1072,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-12T19:06:16.992939+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 301,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1002,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-12T19:06:26.858131+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 302,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 810,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ESFP",
            "result": false,
            "created_at": "2023-11-12T19:06:32.830665+00:00",
            "celebrity_type": "ENFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 303,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 64,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-12T19:06:41.497357+00:00",
            "celebrity_type": "ISFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 304,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 352,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-12T19:06:46.42315+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 305,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 386,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": false,
            "created_at": "2023-11-12T19:06:55.346934+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 306,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 72,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-12T19:07:02.293077+00:00",
            "celebrity_type": "ISFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 307,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 613,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-12T19:09:10.127365+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 308,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1091,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ENFP",
            "result": false,
            "created_at": "2023-11-12T19:09:15.43372+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 309,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 568,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-12T19:09:19.631115+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 310,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 500,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ESFP",
            "result": false,
            "created_at": "2023-11-12T19:09:24.070456+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 311,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 702,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-12T19:09:33.3963+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 312,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1188,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-12T19:09:39.615268+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 313,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 42,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ISTJ",
            "result": false,
            "created_at": "2023-11-12T19:09:45.152367+00:00",
            "celebrity_type": "ISTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 314,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 808,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ENFP",
            "result": false,
            "created_at": "2023-11-12T19:09:51.016063+00:00",
            "celebrity_type": "ENFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 315,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 857,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-12T19:09:58.833053+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 316,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 338,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": false,
            "created_at": "2023-11-12T19:10:04.182461+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 317,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1119,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-12T19:11:13.858722+00:00",
            "celebrity_type": "ENFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 318,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 355,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": false,
            "created_at": "2023-11-12T19:11:17.953172+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 319,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 975,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-12T19:11:22.939376+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 320,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 461,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-12T19:11:26.299079+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 321,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 906,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-12T19:11:30.004665+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 322,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1067,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-12T19:11:37.181261+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 323,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 316,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-12T19:11:41.431667+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 324,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1066,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-12T19:11:54.003227+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 325,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 453,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-12T19:12:02.005232+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 326,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1059,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-12T19:12:10.606482+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 327,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 385,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-12T19:15:06.377318+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 328,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 512,
            "answer_quadra": "STJ-NFP",
            "answer_type": "INFP",
            "result": false,
            "created_at": "2023-11-12T19:15:10.776039+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 329,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 753,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-12T19:15:17.181389+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 330,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 489,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-12T19:15:30.284899+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 331,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 564,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-12T19:15:33.612467+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 332,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 231,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-12T19:15:42.214538+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 333,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1088,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-12T19:15:48.305579+00:00",
            "celebrity_type": "ESFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 334,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 439,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-12T19:15:52.544414+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 335,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 861,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-12T19:15:58.686087+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 336,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1006,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-12T19:16:01.684872+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 337,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 204,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-12T19:17:52.568943+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 338,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 432,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ENTJ",
            "result": false,
            "created_at": "2023-11-12T19:17:56.204711+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 339,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 986,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-12T19:18:05.306048+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 340,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 841,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-12T19:20:16.946796+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 341,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 438,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-12T19:20:22.113776+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 342,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 663,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-12T19:20:49.54106+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 343,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1000,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-12T19:20:53.85067+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 344,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 932,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ENTJ",
            "result": false,
            "created_at": "2023-11-12T19:20:58.221068+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 345,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1160,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ENTJ",
            "result": false,
            "created_at": "2023-11-12T19:21:02.055995+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 346,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 983,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-12T19:21:06.482212+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 347,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 505,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-12T21:35:00.209452+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 348,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 476,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-12T21:35:04.816686+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 349,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1097,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ISFP",
            "result": false,
            "created_at": "2023-11-12T21:35:07.556506+00:00",
            "celebrity_type": "ENFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 350,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 587,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ENFP",
            "result": false,
            "created_at": "2023-11-12T21:35:10.016698+00:00",
            "celebrity_type": "INTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 351,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 356,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-12T21:35:11.531927+00:00",
            "celebrity_type": "ISTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 352,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 544,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-12T21:35:12.980886+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 353,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1012,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-12T21:35:14.278273+00:00",
            "celebrity_type": "ESTJ",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 354,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 645,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-12T21:35:15.79547+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 355,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 473,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ENTJ",
            "result": false,
            "created_at": "2023-11-12T21:35:17.994306+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 356,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 646,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "INTJ",
            "result": false,
            "created_at": "2023-11-12T21:35:19.967537+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 357,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 101,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ESFJ",
            "result": false,
            "created_at": "2023-11-12T21:35:29.022077+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 358,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 1178,
            "answer_quadra": "NFJ-STP",
            "answer_type": "INFJ",
            "result": false,
            "created_at": "2023-11-12T21:35:30.430474+00:00",
            "celebrity_type": "ENTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 359,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 188,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ESTJ",
            "result": false,
            "created_at": "2023-11-12T21:35:31.773686+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 360,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 538,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ISTP",
            "result": false,
            "created_at": "2023-11-12T21:35:33.59973+00:00",
            "celebrity_type": "INFP",
            "celebrity_quadra": "STJ-NFP"
        },
        {
            "id": 361,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 144,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "INTP",
            "result": false,
            "created_at": "2023-11-12T21:35:35.197387+00:00",
            "celebrity_type": "INFJ",
            "celebrity_quadra": "NFJ-STP"
        },
        {
            "id": 362,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 985,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ENTP",
            "result": false,
            "created_at": "2023-11-12T21:35:36.600713+00:00",
            "celebrity_type": "ENTP",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 363,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 750,
            "answer_quadra": "SFJ-NTP",
            "answer_type": "ISFJ",
            "result": false,
            "created_at": "2023-11-12T21:35:38.268691+00:00",
            "celebrity_type": "ESFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 364,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 79,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ENTJ",
            "result": false,
            "created_at": "2023-11-12T21:35:39.572089+00:00",
            "celebrity_type": "ISFJ",
            "celebrity_quadra": "SFJ-NTP"
        },
        {
            "id": 365,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 305,
            "answer_quadra": "NTJ-SFP",
            "answer_type": "ESFP",
            "result": false,
            "created_at": "2023-11-12T21:35:40.94911+00:00",
            "celebrity_type": "INTJ",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 366,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 480,
            "answer_quadra": "STJ-NFP",
            "answer_type": "ISTJ",
            "result": false,
            "created_at": "2023-11-12T21:35:42.504711+00:00",
            "celebrity_type": "ISFP",
            "celebrity_quadra": "NTJ-SFP"
        },
        {
            "id": 367,
            "user_email": "jimgreekk@gmail.com",
            "user_type": null,
            "celebrity_id": 627,
            "answer_quadra": "NFJ-STP",
            "answer_type": "ESTP",
            "result": false,
            "created_at": "2023-11-12T21:44:23.888502+00:00",
            "celebrity_type": "ESTP",
            "celebrity_quadra": "NFJ-STP"
        }
    ]
}

export const getAllData = (data) => {
    if(data === 'testing'){
        data = returnFakeData()
    }
    let typeCount = {
        "ISTJ": {correct: 0, wrong: 0, total: 0},
        "ISFJ": {correct: 0, wrong: 0, total: 0},
        "ENTJ": {correct: 0, wrong: 0, total: 0},
        "INTJ": {correct: 0, wrong: 0, total: 0},
        "ISTP": {correct: 0, wrong: 0, total: 0},
        "ISFP": {correct: 0, wrong: 0, total: 0},
        "ENFJ": {correct: 0, wrong: 0, total: 0},
        "INFJ": {correct: 0, wrong: 0, total: 0},
        "ESTP": {correct: 0, wrong: 0, total: 0},
        "ESFP": {correct: 0, wrong: 0, total: 0},
        "ENFP": {correct: 0, wrong: 0, total: 0},
        "INFP": {correct: 0, wrong: 0, total: 0},
        "ESTJ": {correct: 0, wrong: 0, total: 0},
        "ESFJ": {correct: 0, wrong: 0, total: 0},
        "ENTP": {correct: 0, wrong: 0, total: 0},
        "INTP": {correct: 0, wrong: 0, total: 0}
    };

    let quadraCount = {
        "NFJ-STP": {correct: 0, wrong: 0},
        "NTJ-SFP": {correct: 0, wrong: 0},
        "STJ-NFP": {correct: 0, wrong: 0},
        "SFJ-NTP": {correct: 0, wrong: 0}
    };

    let correctCount = 0;
    let wrongCount = 0;
    let correctCountQuadra = 0;
    let wrongCountQuadra = 0;

    data.forEach((obj) => {
        // Type accuracy
        if (obj.result) {
            typeCount[obj.answer_type].correct++;
        } else {
            typeCount[obj.answer_type].wrong++;
        }

        // Quadra accuracy
        if (obj.answer_quadra === obj.celebrity_quadra) {
            quadraCount[obj.answer_quadra].correct++;
            correctCountQuadra++;
        } else {
            quadraCount[obj.answer_quadra].wrong++;
            wrongCountQuadra++;
        }

        // Overall accuracy
        if (obj.result) {
            correctCount++;
        } else {
            wrongCount++;
        }

        typeCount[obj.answer_type].total++;
    });

    const accuracy = {accuracyType: correctCount / (correctCount + wrongCount) * 100};
    accuracy.accuracyQuadra = correctCountQuadra / (correctCountQuadra + wrongCountQuadra) * 100;
    accuracy.correctCount = correctCount;
    accuracy.wrongCount = wrongCount;
    accuracy.correctCountQuadra = correctCountQuadra;
    accuracy.wrongCountQuadra = wrongCountQuadra;

    // Calculate accuracy ratios for each type and quadra
    let typeAccuracy = {};
    let quadraAccuracy = {};

    for (const [key, value] of Object.entries(typeCount)) {
        typeAccuracy[key] = value.correct / (value.correct + value.wrong) * 100;
    }

    for (const [key, value] of Object.entries(quadraCount)) {
        quadraAccuracy[key] = value.correct / (value.correct + value.wrong) * 100;
    }

    // Get min and max type and quadra accuracy
    let minType = '';
    let maxType = '';
    let minQuadra = '';
    let maxQuadra = '';
    let minTypeAccuracy = 100;
    let maxTypeAccuracy = 0;
    let minQuadraAccuracy = 100;
    let maxQuadraAccuracy = 0;

    for (const [key, value] of Object.entries(typeAccuracy)) {
        if (typeCount[key].total < 5) {
            continue;
        }

        if (value < minTypeAccuracy) {
            minTypeAccuracy = value;
            minType = key;
        }

        if (value > maxTypeAccuracy) {
            maxTypeAccuracy = value;
            maxType = key;
        }
    }

    for (const [key, value] of Object.entries(quadraAccuracy)) {
        if (value < minQuadraAccuracy) {
            minQuadraAccuracy = value;
            minQuadra = key;
        }

        if (value > maxQuadraAccuracy) {
            maxQuadraAccuracy = value;
            maxQuadra = key;
        }
    }

    // Format quadra and type data
    const formatedQuadraData = Object.entries(quadraCount).map(([key, value]) => ({
        name: key,
        correct: value.correct,
        wrong: value.wrong,
    }));

    const formatedTypeData = Object.entries(typeCount).map(([key, value]) => ({
        name: key,
        correct: value.correct,
        wrong: value.wrong,
    }));

    // Get least accurate type info
    const leastAccurateType = minType;
    const leastTypeInfo = getLeastInfo(data, leastAccurateType);

    // Get least accurate quadra info
    const leastAccurateQuadra = minQuadra;
    const leastQuadraInfo = getLeastQuadraInfo(data, leastAccurateQuadra);

    return {
        accuracy,
        minType,
        maxType,
        minQuadra,
        maxQuadra,
        minTypeAccuracy,
        maxTypeAccuracy,
        minQuadraAccuracy,
        maxQuadraAccuracy,
        typeCount,
        quadraCount,
        formatedQuadraData,
        formatedTypeData,
        leastTypeInfo,
        leastQuadraInfo,
    };
};

const getLeastInfo = (data, leastAccurate) => {
    const types = {
        ISTJ: 0,
        ISFJ: 0,
        ENTJ: 0,
        INTJ: 0,
        ISTP: 0,
        ISFP: 0,
        ENFJ: 0,
        INFJ: 0,
        ESTP: 0,
        ESFP: 0,
        ENFP: 0,
        INFP: 0,
        ESTJ: 0,
        ESFJ: 0,
        ENTP: 0,
        INTP: 0,
    };

    let count = 0;

    data.forEach((obj) => {
        if (!obj.result && obj.celebrity_type === leastAccurate) {
            types[obj.answer_type]++;
            count++;
        }
    });

    // Get max 3 types and sort them
    const typesArray = Object.entries(types)
        .map(([key, value]) => ({ name: key, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 3);

    // Get their ratio for each
    const typesRatio = typesArray.map((obj) => ({
        name: obj.name,
        value: obj.value / count * 100,
    }));

    return { typesArray, typesRatio };
};

const getLeastQuadraInfo = (data, leastAccurateQuadra) => {
    const quadras = {
        "NFJ-STP": 0,
        "NTJ-SFP": 0,
        "STJ-NFP": 0,
        "SFJ-NTP": 0,
    };

    let count = 0;

    data.forEach((obj) => {
        if (obj.celebrity_quadra === leastAccurateQuadra && obj.answer_quadra !== leastAccurateQuadra) {
            quadras[obj.answer_quadra]++;
            count++;
        }
    });

    // Get max 3 types and sort them
    const quadrasArray = Object.entries(quadras)
        .map(([key, value]) => ({ name: key, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 3);

    // Get their ratio for each
    const quadrasRatio = quadrasArray.map((obj) => ({
        name: obj.name,
        value: obj.value / count * 100,
    }));

    return { quadrasArray, quadrasRatio };
};






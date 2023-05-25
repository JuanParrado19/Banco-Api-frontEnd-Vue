import { ref } from "vue";
import axios from "axios";
import { watch } from "vue";

function useFetch(url,loginId, options = { onError: null }) {
    const data = ref(null);
    const error = ref(null);
    const isLoading = ref(true);
    const formdata = {
        "documento_usuario": loginId
    };
    
    let stopErrorWatcher = null;

    if (options.onError !== null) {
        stopErrorWatcher = watch(error, (e) => options.onError(e));
    }

    axios.post(url, formdata)
        .then(res => data.value = res.data)
        .catch((e) => (error.value = e))
        .finally(() => {
            isLoading.value = false
            if (stopErrorWatcher !== null) {
                stopErrorWatcher();
            }
        });

    return {
        data,
        error,
        isLoading
    }
}

function useFetchUnique(url, options = { onError: null }) {
    const data = ref(null);
    const error = ref(null);
    const isLoading = ref(true);
    
    let stopErrorWatcher = null;

    if (options.onError !== null) {
        stopErrorWatcher = watch(error, (e) => options.onError(e));
    }

    axios.get(url)
        .then(res => data.value = res.data)
        .catch((e) => (error.value = e))
        .finally(() => {
            isLoading.value = false
            if (stopErrorWatcher !== null) {
                stopErrorWatcher();
            }
        });

    return {
        data,
        error,
        isLoading
    }
}

export { useFetch ,useFetchUnique};
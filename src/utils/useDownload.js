import { useState, useEffect } from "react"
import axios from "axios";

export const useDownload = (url) => {
    const [downloadUrl, setDownloadUrl] = useState(null)
	const config = {
		url,
		method: "GET",
		responseType: "blob"
	}

	useEffect(() => {
		(async () => {
			try {
				const {data} = await axios.request(config)
				const url = URL.createObjectURL(new Blob([data]))
				setDownloadUrl(url)
			} catch(e) {
				console.log(e)
			}
		})();
	},[])

	return downloadUrl
}
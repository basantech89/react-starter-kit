import axios from 'axios'
import { showLoader } from '../store/state/common'
import store from '../store'

declare interface IMetaConfig {
	showLoader?: boolean
}

const constructUrl = (url: string) => {
	if (process.env.REACT_APP_API_BASE) {
		return `${process.env.REACT_APP_API_BASE}${url}`
	}
	return url
}

export const get = async <K>(
	url: string,
	headers?: object,
	metaConfig: IMetaConfig = { showLoader: true }
) => {
	try {
		if (metaConfig.showLoader) {
			store.dispatch(showLoader({}))
		}
		const { data } = await axios.get(constructUrl(url), {
			headers: headers
		})
		return data as K
	} catch (e) {
		// global error handling
		throw new Error(e)
	}
}

export const post = async <K>(
	url: string,
	postData: Object,
	headers?: object
) => {
	try {
		const { data } = await axios.post(constructUrl(url), postData, {
			headers: headers
		})
		return data as K
	} catch (e) {
		throw new Error(e)
	}
}

export const remove = async <K>(url: string, headers?: object) => {
	try {
		const { data } = await axios.delete(constructUrl(url), {
			headers: headers
		})
		return data as K
	} catch (e) {
		throw new Error(e)
	}
}

export const patch = async <K>(
	url: string,
	patchData: Object,
	headers?: object
) => {
	try {
		const { data } = await axios.patch(constructUrl(url), patchData, {
			headers: headers
		})
		return data as K
	} catch (e) {
		throw new Error(e)
	}
}

export const formPost = async <K>(
	url: string,
	formPostData: object,
	headers?: Object
) => {
	try {
		const bodyFormData = new FormData()
		Object.keys(formPostData).forEach((key: string) => {
			//@ts-ignore
			bodyFormData.set(key, formPostData[key])
		})
		let defaultHeaders = {
			'Content-Type': 'multipart/form-data'
		}
		if (headers) {
			defaultHeaders = {
				...defaultHeaders,
				...headers
			}
		}
		const { data } = await axios.post(constructUrl(url), bodyFormData, {
			headers: defaultHeaders
		})
		return data as K
	} catch (e) {
		throw new Error(e)
	}
}

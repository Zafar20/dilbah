import { fetcher } from "./api"
import axios from 'axios';

export async function getPartnersImages() {
  return fetcher("partners/images")
}
export async function getSliderImages() {
  return fetcher("images")
}

export async function getAboutData(locale: string) {
  return fetcher("about/", {
    headers: {
      "Accept-Language": locale,
    },
  })
}

export async function getContacts() {
  return fetcher(`vars/`)
}

export async function getCertificates() {
  return fetcher(`certificates/`)
}

export async function getProducts(
  locale: string,
  type?: string,
  limit?: number,
  offset?: number
) {
  return fetcher(`products/${type}?limit=${limit}&offset=${offset}`, {
    headers: {
      "Accept-Language": locale,
    },
  })
}

export async function getProductsId(id: number, locale: string, type?: string) {
  return fetcher(`products/${type}/${id}`, {
    headers: {
      "Accept-Language": locale,
    },
  })
}

export async function sendEmail(data: any) {
  return axios.post('send_mail/', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
/********************************************************************************
 * Eclipse Tractus-X - Industry Core Hub Frontend
 *
 * Copyright (c) 2025 Contributors to the Eclipse Foundation
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the
 * License for the specific language govern in permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
********************************************************************************/

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English
import enCommon from './locales/en/common.json';
import enKits from './locales/en/kits.json';
import enCatalogManagement from './locales/en/catalogManagement.json';
import enPartnerManagement from './locales/en/partnerManagement.json';
import enPassportConsumption from './locales/en/passportConsumption.json';
import enPassportProvision from './locales/en/passportProvision.json';
import enPartDiscovery from './locales/en/partDiscovery.json';

// Spanish
import esCommon from './locales/es/common.json';
import esKits from './locales/es/kits.json';
import esCatalogManagement from './locales/es/catalogManagement.json';
import esPartnerManagement from './locales/es/partnerManagement.json';
import esPassportConsumption from './locales/es/passportConsumption.json';
import esPassportProvision from './locales/es/passportProvision.json';
import esPartDiscovery from './locales/es/partDiscovery.json';

// German
import deCommon from './locales/de/common.json';
import deKits from './locales/de/kits.json';
import deCatalogManagement from './locales/de/catalogManagement.json';
import dePartnerManagement from './locales/de/partnerManagement.json';
import dePassportConsumption from './locales/de/passportConsumption.json';
import dePassportProvision from './locales/de/passportProvision.json';
import dePartDiscovery from './locales/de/partDiscovery.json';

// French
import frCommon from './locales/fr/common.json';
import frKits from './locales/fr/kits.json';
import frCatalogManagement from './locales/fr/catalogManagement.json';
import frPartnerManagement from './locales/fr/partnerManagement.json';
import frPassportConsumption from './locales/fr/passportConsumption.json';
import frPassportProvision from './locales/fr/passportProvision.json';
import frPartDiscovery from './locales/fr/partDiscovery.json';

export const defaultNS = 'common';
export const resources = {
  en: {
    common: enCommon,
    kits: enKits,
    catalogManagement: enCatalogManagement,
    partnerManagement: enPartnerManagement,
    passportConsumption: enPassportConsumption,
    passportProvision: enPassportProvision,
    partDiscovery: enPartDiscovery
  },
  es: {
    common: esCommon,
    kits: esKits,
    catalogManagement: esCatalogManagement,
    partnerManagement: esPartnerManagement,
    passportConsumption: esPassportConsumption,
    passportProvision: esPassportProvision,
    partDiscovery: esPartDiscovery
  },
  de: {
    common: deCommon,
    kits: deKits,
    catalogManagement: deCatalogManagement,
    partnerManagement: dePartnerManagement,
    passportConsumption: dePassportConsumption,
    passportProvision: dePassportProvision,
    partDiscovery: dePartDiscovery
  },
  fr: {
    common: frCommon,
    kits: frKits,
    catalogManagement: frCatalogManagement,
    partnerManagement: frPartnerManagement,
    passportConsumption: frPassportConsumption,
    passportProvision: frPassportProvision,
    partDiscovery: frPartDiscovery
  }
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    defaultNS,
    ns: ['common', 'kits', 'catalogManagement', 'partnerManagement', 'passportConsumption', 'passportProvision', 'partDiscovery'],
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;

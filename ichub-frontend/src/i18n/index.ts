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

// Spanish
import esCommon from './locales/es/common.json';
import esKits from './locales/es/kits.json';

// German
import deCommon from './locales/de/common.json';
import deKits from './locales/de/kits.json';

// French
import frCommon from './locales/fr/common.json';
import frKits from './locales/fr/kits.json';

export const defaultNS = 'common';
export const resources = {
  en: {
    common: enCommon,
    kits: enKits
  },
  es: {
    common: esCommon,
    kits: esKits
  },
  de: {
    common: deCommon,
    kits: deKits
  },
  fr: {
    common: frCommon,
    kits: frKits
  }
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    defaultNS,
    ns: ['common', 'kits'],
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;

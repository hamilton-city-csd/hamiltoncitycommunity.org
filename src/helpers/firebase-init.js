/* global firebase */

import { apiKey, databaseURL, projectId } from "env.json";


var config = { apiKey, databaseURL, projectId, };
firebase.initializeApp(config);

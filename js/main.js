import {initUpload} from './upload.js';
import {renderTumbnails} from './thumbnails.js';
import {getData} from './api.js';

getData((usersPostsData) => renderTumbnails(usersPostsData));
initUpload();

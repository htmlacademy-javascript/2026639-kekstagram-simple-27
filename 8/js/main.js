import './utils.js';
import {renderTumbnails} from './thumbnails.js';
import './upload.js';
import {getData} from './api.js';

getData((usersPostsData) => renderTumbnails(usersPostsData));

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

const NO_PATH = '';
const SLASH = '/';
const HOME_PATH = "home";
const NEWS_PATH = "news";
const CINEMA_PATH = "cinema";
const GOSSIPS_PATH = "gossips";
const CONTENT = "content";
const TOP_STORY = "top";
const SPECIAL_STORY = "special";
const POLITICAL_STORY = "political";
const CINEMA_STORY = "cinema_header";
const GOSSIP_STORY = "gossip_header";
const CONTENT_PATH = CONTENT + SLASH + ":id";
const JSON = ".json";
const TOP_STORIES_JSON = "top-stories" + JSON;
const SPECIAL_STORY_JSON = "special-story" + JSON;
const HEADERS_JSON = "headers" + JSON;
const LANGUAGES_JSON = "languages" + JSON;
const NEWS_JSON = "news" + JSON;
const CINEMA_JSON = "cinema" + JSON;
const GOSSIPS_JSON = "gossips" + JSON;
const NO_OF_LINKS = 5;
const BUCKET = new S3({
});
const S3_FLODER = 'feed-data/';
const S3_BUCKET_NAME = 'contentjson';

export {
    NO_PATH,
    SLASH,
    JSON,
    CONTENT,
    HOME_PATH,
    NEWS_PATH,
    CINEMA_PATH,
    GOSSIPS_PATH,
    CONTENT_PATH,
    TOP_STORIES_JSON,
    SPECIAL_STORY_JSON,
    HEADERS_JSON,
    LANGUAGES_JSON,
    NEWS_JSON,
    CINEMA_JSON,
    GOSSIPS_JSON,
    NO_OF_LINKS,
    TOP_STORY,
    SPECIAL_STORY,
    POLITICAL_STORY,
    CINEMA_STORY,
    GOSSIP_STORY,
    BUCKET,
    S3_FLODER,
    S3_BUCKET_NAME
}
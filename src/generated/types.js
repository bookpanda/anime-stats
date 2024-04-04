import gql from "graphql-tag";
/** Activity sort enums */
export var ActivitySort;
(function (ActivitySort) {
    ActivitySort["Id"] = "ID";
    ActivitySort["IdDesc"] = "ID_DESC";
    ActivitySort["Pinned"] = "PINNED";
})(ActivitySort || (ActivitySort = {}));
/** Activity type enum. */
export var ActivityType;
(function (ActivityType) {
    /** A anime list update activity */
    ActivityType["AnimeList"] = "ANIME_LIST";
    /** A manga list update activity */
    ActivityType["MangaList"] = "MANGA_LIST";
    /** Anime & Manga list update, only used in query arguments */
    ActivityType["MediaList"] = "MEDIA_LIST";
    /** A text message activity sent to another user */
    ActivityType["Message"] = "MESSAGE";
    /** A text activity */
    ActivityType["Text"] = "TEXT";
})(ActivityType || (ActivityType = {}));
/** Airing schedule sort enums */
export var AiringSort;
(function (AiringSort) {
    AiringSort["Episode"] = "EPISODE";
    AiringSort["EpisodeDesc"] = "EPISODE_DESC";
    AiringSort["Id"] = "ID";
    AiringSort["IdDesc"] = "ID_DESC";
    AiringSort["MediaId"] = "MEDIA_ID";
    AiringSort["MediaIdDesc"] = "MEDIA_ID_DESC";
    AiringSort["Time"] = "TIME";
    AiringSort["TimeDesc"] = "TIME_DESC";
})(AiringSort || (AiringSort = {}));
/** The role the character plays in the media */
export var CharacterRole;
(function (CharacterRole) {
    /** A background character in the media */
    CharacterRole["Background"] = "BACKGROUND";
    /** A primary character role in the media */
    CharacterRole["Main"] = "MAIN";
    /** A supporting character role in the media */
    CharacterRole["Supporting"] = "SUPPORTING";
})(CharacterRole || (CharacterRole = {}));
/** Character sort enums */
export var CharacterSort;
(function (CharacterSort) {
    CharacterSort["Favourites"] = "FAVOURITES";
    CharacterSort["FavouritesDesc"] = "FAVOURITES_DESC";
    CharacterSort["Id"] = "ID";
    CharacterSort["IdDesc"] = "ID_DESC";
    /** Order manually decided by moderators */
    CharacterSort["Relevance"] = "RELEVANCE";
    CharacterSort["Role"] = "ROLE";
    CharacterSort["RoleDesc"] = "ROLE_DESC";
    CharacterSort["SearchMatch"] = "SEARCH_MATCH";
})(CharacterSort || (CharacterSort = {}));
export var ExternalLinkMediaType;
(function (ExternalLinkMediaType) {
    ExternalLinkMediaType["Anime"] = "ANIME";
    ExternalLinkMediaType["Manga"] = "MANGA";
    ExternalLinkMediaType["Staff"] = "STAFF";
})(ExternalLinkMediaType || (ExternalLinkMediaType = {}));
export var ExternalLinkType;
(function (ExternalLinkType) {
    ExternalLinkType["Info"] = "INFO";
    ExternalLinkType["Social"] = "SOCIAL";
    ExternalLinkType["Streaming"] = "STREAMING";
})(ExternalLinkType || (ExternalLinkType = {}));
/** Types that can be liked */
export var LikeableType;
(function (LikeableType) {
    LikeableType["Activity"] = "ACTIVITY";
    LikeableType["ActivityReply"] = "ACTIVITY_REPLY";
    LikeableType["Thread"] = "THREAD";
    LikeableType["ThreadComment"] = "THREAD_COMMENT";
})(LikeableType || (LikeableType = {}));
/** The format the media was released in */
export var MediaFormat;
(function (MediaFormat) {
    /** Professionally published manga with more than one chapter */
    MediaFormat["Manga"] = "MANGA";
    /** Anime movies with a theatrical release */
    MediaFormat["Movie"] = "MOVIE";
    /** Short anime released as a music video */
    MediaFormat["Music"] = "MUSIC";
    /** Written books released as a series of light novels */
    MediaFormat["Novel"] = "NOVEL";
    /** (Original Net Animation) Anime that have been originally released online or are only available through streaming services. */
    MediaFormat["Ona"] = "ONA";
    /** Manga with just one chapter */
    MediaFormat["OneShot"] = "ONE_SHOT";
    /** (Original Video Animation) Anime that have been released directly on DVD/Blu-ray without originally going through a theatrical release or television broadcast */
    MediaFormat["Ova"] = "OVA";
    /** Special episodes that have been included in DVD/Blu-ray releases, picture dramas, pilots, etc */
    MediaFormat["Special"] = "SPECIAL";
    /** Anime broadcast on television */
    MediaFormat["Tv"] = "TV";
    /** Anime which are under 15 minutes in length and broadcast on television */
    MediaFormat["TvShort"] = "TV_SHORT";
})(MediaFormat || (MediaFormat = {}));
/** Media list sort enums */
export var MediaListSort;
(function (MediaListSort) {
    MediaListSort["AddedTime"] = "ADDED_TIME";
    MediaListSort["AddedTimeDesc"] = "ADDED_TIME_DESC";
    MediaListSort["FinishedOn"] = "FINISHED_ON";
    MediaListSort["FinishedOnDesc"] = "FINISHED_ON_DESC";
    MediaListSort["MediaId"] = "MEDIA_ID";
    MediaListSort["MediaIdDesc"] = "MEDIA_ID_DESC";
    MediaListSort["MediaPopularity"] = "MEDIA_POPULARITY";
    MediaListSort["MediaPopularityDesc"] = "MEDIA_POPULARITY_DESC";
    MediaListSort["MediaTitleEnglish"] = "MEDIA_TITLE_ENGLISH";
    MediaListSort["MediaTitleEnglishDesc"] = "MEDIA_TITLE_ENGLISH_DESC";
    MediaListSort["MediaTitleNative"] = "MEDIA_TITLE_NATIVE";
    MediaListSort["MediaTitleNativeDesc"] = "MEDIA_TITLE_NATIVE_DESC";
    MediaListSort["MediaTitleRomaji"] = "MEDIA_TITLE_ROMAJI";
    MediaListSort["MediaTitleRomajiDesc"] = "MEDIA_TITLE_ROMAJI_DESC";
    MediaListSort["Priority"] = "PRIORITY";
    MediaListSort["PriorityDesc"] = "PRIORITY_DESC";
    MediaListSort["Progress"] = "PROGRESS";
    MediaListSort["ProgressDesc"] = "PROGRESS_DESC";
    MediaListSort["ProgressVolumes"] = "PROGRESS_VOLUMES";
    MediaListSort["ProgressVolumesDesc"] = "PROGRESS_VOLUMES_DESC";
    MediaListSort["Repeat"] = "REPEAT";
    MediaListSort["RepeatDesc"] = "REPEAT_DESC";
    MediaListSort["Score"] = "SCORE";
    MediaListSort["ScoreDesc"] = "SCORE_DESC";
    MediaListSort["StartedOn"] = "STARTED_ON";
    MediaListSort["StartedOnDesc"] = "STARTED_ON_DESC";
    MediaListSort["Status"] = "STATUS";
    MediaListSort["StatusDesc"] = "STATUS_DESC";
    MediaListSort["UpdatedTime"] = "UPDATED_TIME";
    MediaListSort["UpdatedTimeDesc"] = "UPDATED_TIME_DESC";
})(MediaListSort || (MediaListSort = {}));
/** Media list watching/reading status enum. */
export var MediaListStatus;
(function (MediaListStatus) {
    /** Finished watching/reading */
    MediaListStatus["Completed"] = "COMPLETED";
    /** Currently watching/reading */
    MediaListStatus["Current"] = "CURRENT";
    /** Stopped watching/reading before completing */
    MediaListStatus["Dropped"] = "DROPPED";
    /** Paused watching/reading */
    MediaListStatus["Paused"] = "PAUSED";
    /** Planning to watch/read */
    MediaListStatus["Planning"] = "PLANNING";
    /** Re-watching/reading */
    MediaListStatus["Repeating"] = "REPEATING";
})(MediaListStatus || (MediaListStatus = {}));
/** The type of ranking */
export var MediaRankType;
(function (MediaRankType) {
    /** Ranking is based on the media's popularity */
    MediaRankType["Popular"] = "POPULAR";
    /** Ranking is based on the media's ratings/score */
    MediaRankType["Rated"] = "RATED";
})(MediaRankType || (MediaRankType = {}));
/** Type of relation media has to its parent. */
export var MediaRelation;
(function (MediaRelation) {
    /** An adaption of this media into a different format */
    MediaRelation["Adaptation"] = "ADAPTATION";
    /** An alternative version of the same media */
    MediaRelation["Alternative"] = "ALTERNATIVE";
    /** Shares at least 1 character */
    MediaRelation["Character"] = "CHARACTER";
    /** Version 2 only. */
    MediaRelation["Compilation"] = "COMPILATION";
    /** Version 2 only. */
    MediaRelation["Contains"] = "CONTAINS";
    /** Other */
    MediaRelation["Other"] = "OTHER";
    /** The media a side story is from */
    MediaRelation["Parent"] = "PARENT";
    /** Released before the relation */
    MediaRelation["Prequel"] = "PREQUEL";
    /** Released after the relation */
    MediaRelation["Sequel"] = "SEQUEL";
    /** A side story of the parent media */
    MediaRelation["SideStory"] = "SIDE_STORY";
    /** Version 2 only. The source material the media was adapted from */
    MediaRelation["Source"] = "SOURCE";
    /** An alternative version of the media with a different primary focus */
    MediaRelation["SpinOff"] = "SPIN_OFF";
    /** A shortened and summarized version */
    MediaRelation["Summary"] = "SUMMARY";
})(MediaRelation || (MediaRelation = {}));
export var MediaSeason;
(function (MediaSeason) {
    /** Months September to November */
    MediaSeason["Fall"] = "FALL";
    /** Months March to May */
    MediaSeason["Spring"] = "SPRING";
    /** Months June to August */
    MediaSeason["Summer"] = "SUMMER";
    /** Months December to February */
    MediaSeason["Winter"] = "WINTER";
})(MediaSeason || (MediaSeason = {}));
/** Media sort enums */
export var MediaSort;
(function (MediaSort) {
    MediaSort["Chapters"] = "CHAPTERS";
    MediaSort["ChaptersDesc"] = "CHAPTERS_DESC";
    MediaSort["Duration"] = "DURATION";
    MediaSort["DurationDesc"] = "DURATION_DESC";
    MediaSort["EndDate"] = "END_DATE";
    MediaSort["EndDateDesc"] = "END_DATE_DESC";
    MediaSort["Episodes"] = "EPISODES";
    MediaSort["EpisodesDesc"] = "EPISODES_DESC";
    MediaSort["Favourites"] = "FAVOURITES";
    MediaSort["FavouritesDesc"] = "FAVOURITES_DESC";
    MediaSort["Format"] = "FORMAT";
    MediaSort["FormatDesc"] = "FORMAT_DESC";
    MediaSort["Id"] = "ID";
    MediaSort["IdDesc"] = "ID_DESC";
    MediaSort["Popularity"] = "POPULARITY";
    MediaSort["PopularityDesc"] = "POPULARITY_DESC";
    MediaSort["Score"] = "SCORE";
    MediaSort["ScoreDesc"] = "SCORE_DESC";
    MediaSort["SearchMatch"] = "SEARCH_MATCH";
    MediaSort["StartDate"] = "START_DATE";
    MediaSort["StartDateDesc"] = "START_DATE_DESC";
    MediaSort["Status"] = "STATUS";
    MediaSort["StatusDesc"] = "STATUS_DESC";
    MediaSort["TitleEnglish"] = "TITLE_ENGLISH";
    MediaSort["TitleEnglishDesc"] = "TITLE_ENGLISH_DESC";
    MediaSort["TitleNative"] = "TITLE_NATIVE";
    MediaSort["TitleNativeDesc"] = "TITLE_NATIVE_DESC";
    MediaSort["TitleRomaji"] = "TITLE_ROMAJI";
    MediaSort["TitleRomajiDesc"] = "TITLE_ROMAJI_DESC";
    MediaSort["Trending"] = "TRENDING";
    MediaSort["TrendingDesc"] = "TRENDING_DESC";
    MediaSort["Type"] = "TYPE";
    MediaSort["TypeDesc"] = "TYPE_DESC";
    MediaSort["UpdatedAt"] = "UPDATED_AT";
    MediaSort["UpdatedAtDesc"] = "UPDATED_AT_DESC";
    MediaSort["Volumes"] = "VOLUMES";
    MediaSort["VolumesDesc"] = "VOLUMES_DESC";
})(MediaSort || (MediaSort = {}));
/** Source type the media was adapted from */
export var MediaSource;
(function (MediaSource) {
    /** Version 2+ only. Japanese Anime */
    MediaSource["Anime"] = "ANIME";
    /** Version 3 only. Comics excluding manga */
    MediaSource["Comic"] = "COMIC";
    /** Version 2+ only. Self-published works */
    MediaSource["Doujinshi"] = "DOUJINSHI";
    /** Version 3 only. Games excluding video games */
    MediaSource["Game"] = "GAME";
    /** Written work published in volumes */
    MediaSource["LightNovel"] = "LIGHT_NOVEL";
    /** Version 3 only. Live action media such as movies or TV show */
    MediaSource["LiveAction"] = "LIVE_ACTION";
    /** Asian comic book */
    MediaSource["Manga"] = "MANGA";
    /** Version 3 only. Multimedia project */
    MediaSource["MultimediaProject"] = "MULTIMEDIA_PROJECT";
    /** Version 2+ only. Written works not published in volumes */
    MediaSource["Novel"] = "NOVEL";
    /** An original production not based of another work */
    MediaSource["Original"] = "ORIGINAL";
    /** Other */
    MediaSource["Other"] = "OTHER";
    /** Version 3 only. Picture book */
    MediaSource["PictureBook"] = "PICTURE_BOOK";
    /** Video game */
    MediaSource["VideoGame"] = "VIDEO_GAME";
    /** Video game driven primary by text and narrative */
    MediaSource["VisualNovel"] = "VISUAL_NOVEL";
    /** Version 3 only. Written works published online */
    MediaSource["WebNovel"] = "WEB_NOVEL";
})(MediaSource || (MediaSource = {}));
/** The current releasing status of the media */
export var MediaStatus;
(function (MediaStatus) {
    /** Ended before the work could be finished */
    MediaStatus["Cancelled"] = "CANCELLED";
    /** Has completed and is no longer being released */
    MediaStatus["Finished"] = "FINISHED";
    /** Version 2 only. Is currently paused from releasing and will resume at a later date */
    MediaStatus["Hiatus"] = "HIATUS";
    /** To be released at a later date */
    MediaStatus["NotYetReleased"] = "NOT_YET_RELEASED";
    /** Currently releasing */
    MediaStatus["Releasing"] = "RELEASING";
})(MediaStatus || (MediaStatus = {}));
/** Media trend sort enums */
export var MediaTrendSort;
(function (MediaTrendSort) {
    MediaTrendSort["Date"] = "DATE";
    MediaTrendSort["DateDesc"] = "DATE_DESC";
    MediaTrendSort["Episode"] = "EPISODE";
    MediaTrendSort["EpisodeDesc"] = "EPISODE_DESC";
    MediaTrendSort["Id"] = "ID";
    MediaTrendSort["IdDesc"] = "ID_DESC";
    MediaTrendSort["MediaId"] = "MEDIA_ID";
    MediaTrendSort["MediaIdDesc"] = "MEDIA_ID_DESC";
    MediaTrendSort["Popularity"] = "POPULARITY";
    MediaTrendSort["PopularityDesc"] = "POPULARITY_DESC";
    MediaTrendSort["Score"] = "SCORE";
    MediaTrendSort["ScoreDesc"] = "SCORE_DESC";
    MediaTrendSort["Trending"] = "TRENDING";
    MediaTrendSort["TrendingDesc"] = "TRENDING_DESC";
})(MediaTrendSort || (MediaTrendSort = {}));
/** Media type enum, anime or manga. */
export var MediaType;
(function (MediaType) {
    /** Japanese Anime */
    MediaType["Anime"] = "ANIME";
    /** Asian comic */
    MediaType["Manga"] = "MANGA";
})(MediaType || (MediaType = {}));
export var ModActionType;
(function (ModActionType) {
    ModActionType["Anon"] = "ANON";
    ModActionType["Ban"] = "BAN";
    ModActionType["Delete"] = "DELETE";
    ModActionType["Edit"] = "EDIT";
    ModActionType["Expire"] = "EXPIRE";
    ModActionType["Note"] = "NOTE";
    ModActionType["Report"] = "REPORT";
    ModActionType["Reset"] = "RESET";
})(ModActionType || (ModActionType = {}));
/** Mod role enums */
export var ModRole;
(function (ModRole) {
    /** An AniList administrator */
    ModRole["Admin"] = "ADMIN";
    /** An anime data moderator */
    ModRole["AnimeData"] = "ANIME_DATA";
    /** A character data moderator */
    ModRole["CharacterData"] = "CHARACTER_DATA";
    /** A community moderator */
    ModRole["Community"] = "COMMUNITY";
    /** An AniList developer */
    ModRole["Developer"] = "DEVELOPER";
    /** A discord community moderator */
    ModRole["DiscordCommunity"] = "DISCORD_COMMUNITY";
    /** A lead anime data moderator */
    ModRole["LeadAnimeData"] = "LEAD_ANIME_DATA";
    /** A lead community moderator */
    ModRole["LeadCommunity"] = "LEAD_COMMUNITY";
    /** A head developer of AniList */
    ModRole["LeadDeveloper"] = "LEAD_DEVELOPER";
    /** A lead manga data moderator */
    ModRole["LeadMangaData"] = "LEAD_MANGA_DATA";
    /** A lead social media moderator */
    ModRole["LeadSocialMedia"] = "LEAD_SOCIAL_MEDIA";
    /** A manga data moderator */
    ModRole["MangaData"] = "MANGA_DATA";
    /** A retired moderator */
    ModRole["Retired"] = "RETIRED";
    /** A social media moderator */
    ModRole["SocialMedia"] = "SOCIAL_MEDIA";
    /** A staff data moderator */
    ModRole["StaffData"] = "STAFF_DATA";
})(ModRole || (ModRole = {}));
/** Notification type enum */
export var NotificationType;
(function (NotificationType) {
    /** A user has liked your activity */
    NotificationType["ActivityLike"] = "ACTIVITY_LIKE";
    /** A user has mentioned you in their activity */
    NotificationType["ActivityMention"] = "ACTIVITY_MENTION";
    /** A user has sent you message */
    NotificationType["ActivityMessage"] = "ACTIVITY_MESSAGE";
    /** A user has replied to your activity */
    NotificationType["ActivityReply"] = "ACTIVITY_REPLY";
    /** A user has liked your activity reply */
    NotificationType["ActivityReplyLike"] = "ACTIVITY_REPLY_LIKE";
    /** A user has replied to activity you have also replied to */
    NotificationType["ActivityReplySubscribed"] = "ACTIVITY_REPLY_SUBSCRIBED";
    /** An anime you are currently watching has aired */
    NotificationType["Airing"] = "AIRING";
    /** A user has followed you */
    NotificationType["Following"] = "FOLLOWING";
    /** An anime or manga has had a data change that affects how a user may track it in their lists */
    NotificationType["MediaDataChange"] = "MEDIA_DATA_CHANGE";
    /** An anime or manga on the user's list has been deleted from the site */
    NotificationType["MediaDeletion"] = "MEDIA_DELETION";
    /** Anime or manga entries on the user's list have been merged into a single entry */
    NotificationType["MediaMerge"] = "MEDIA_MERGE";
    /** A new anime or manga has been added to the site where its related media is on the user's list */
    NotificationType["RelatedMediaAddition"] = "RELATED_MEDIA_ADDITION";
    /** A user has liked your forum comment */
    NotificationType["ThreadCommentLike"] = "THREAD_COMMENT_LIKE";
    /** A user has mentioned you in a forum comment */
    NotificationType["ThreadCommentMention"] = "THREAD_COMMENT_MENTION";
    /** A user has replied to your forum comment */
    NotificationType["ThreadCommentReply"] = "THREAD_COMMENT_REPLY";
    /** A user has liked your forum thread */
    NotificationType["ThreadLike"] = "THREAD_LIKE";
    /** A user has commented in one of your subscribed forum threads */
    NotificationType["ThreadSubscribed"] = "THREAD_SUBSCRIBED";
})(NotificationType || (NotificationType = {}));
/** Recommendation rating enums */
export var RecommendationRating;
(function (RecommendationRating) {
    RecommendationRating["NoRating"] = "NO_RATING";
    RecommendationRating["RateDown"] = "RATE_DOWN";
    RecommendationRating["RateUp"] = "RATE_UP";
})(RecommendationRating || (RecommendationRating = {}));
/** Recommendation sort enums */
export var RecommendationSort;
(function (RecommendationSort) {
    RecommendationSort["Id"] = "ID";
    RecommendationSort["IdDesc"] = "ID_DESC";
    RecommendationSort["Rating"] = "RATING";
    RecommendationSort["RatingDesc"] = "RATING_DESC";
})(RecommendationSort || (RecommendationSort = {}));
/** Review rating enums */
export var ReviewRating;
(function (ReviewRating) {
    ReviewRating["DownVote"] = "DOWN_VOTE";
    ReviewRating["NoVote"] = "NO_VOTE";
    ReviewRating["UpVote"] = "UP_VOTE";
})(ReviewRating || (ReviewRating = {}));
/** Review sort enums */
export var ReviewSort;
(function (ReviewSort) {
    ReviewSort["CreatedAt"] = "CREATED_AT";
    ReviewSort["CreatedAtDesc"] = "CREATED_AT_DESC";
    ReviewSort["Id"] = "ID";
    ReviewSort["IdDesc"] = "ID_DESC";
    ReviewSort["Rating"] = "RATING";
    ReviewSort["RatingDesc"] = "RATING_DESC";
    ReviewSort["Score"] = "SCORE";
    ReviewSort["ScoreDesc"] = "SCORE_DESC";
    ReviewSort["UpdatedAt"] = "UPDATED_AT";
    ReviewSort["UpdatedAtDesc"] = "UPDATED_AT_DESC";
})(ReviewSort || (ReviewSort = {}));
/** Revision history actions */
export var RevisionHistoryAction;
(function (RevisionHistoryAction) {
    RevisionHistoryAction["Create"] = "CREATE";
    RevisionHistoryAction["Edit"] = "EDIT";
})(RevisionHistoryAction || (RevisionHistoryAction = {}));
/** Media list scoring type */
export var ScoreFormat;
(function (ScoreFormat) {
    /** An integer from 0-3. Should be represented in Smileys. 0 => No Score, 1 => :(, 2 => :|, 3 => :) */
    ScoreFormat["Point_3"] = "POINT_3";
    /** An integer from 0-5. Should be represented in Stars */
    ScoreFormat["Point_5"] = "POINT_5";
    /** An integer from 0-10 */
    ScoreFormat["Point_10"] = "POINT_10";
    /** A float from 0-10 with 1 decimal place */
    ScoreFormat["Point_10Decimal"] = "POINT_10_DECIMAL";
    /** An integer from 0-100 */
    ScoreFormat["Point_100"] = "POINT_100";
})(ScoreFormat || (ScoreFormat = {}));
/** Site trend sort enums */
export var SiteTrendSort;
(function (SiteTrendSort) {
    SiteTrendSort["Change"] = "CHANGE";
    SiteTrendSort["ChangeDesc"] = "CHANGE_DESC";
    SiteTrendSort["Count"] = "COUNT";
    SiteTrendSort["CountDesc"] = "COUNT_DESC";
    SiteTrendSort["Date"] = "DATE";
    SiteTrendSort["DateDesc"] = "DATE_DESC";
})(SiteTrendSort || (SiteTrendSort = {}));
/** The primary language of the voice actor */
export var StaffLanguage;
(function (StaffLanguage) {
    /** English */
    StaffLanguage["English"] = "ENGLISH";
    /** French */
    StaffLanguage["French"] = "FRENCH";
    /** German */
    StaffLanguage["German"] = "GERMAN";
    /** Hebrew */
    StaffLanguage["Hebrew"] = "HEBREW";
    /** Hungarian */
    StaffLanguage["Hungarian"] = "HUNGARIAN";
    /** Italian */
    StaffLanguage["Italian"] = "ITALIAN";
    /** Japanese */
    StaffLanguage["Japanese"] = "JAPANESE";
    /** Korean */
    StaffLanguage["Korean"] = "KOREAN";
    /** Portuguese */
    StaffLanguage["Portuguese"] = "PORTUGUESE";
    /** Spanish */
    StaffLanguage["Spanish"] = "SPANISH";
})(StaffLanguage || (StaffLanguage = {}));
/** Staff sort enums */
export var StaffSort;
(function (StaffSort) {
    StaffSort["Favourites"] = "FAVOURITES";
    StaffSort["FavouritesDesc"] = "FAVOURITES_DESC";
    StaffSort["Id"] = "ID";
    StaffSort["IdDesc"] = "ID_DESC";
    StaffSort["Language"] = "LANGUAGE";
    StaffSort["LanguageDesc"] = "LANGUAGE_DESC";
    /** Order manually decided by moderators */
    StaffSort["Relevance"] = "RELEVANCE";
    StaffSort["Role"] = "ROLE";
    StaffSort["RoleDesc"] = "ROLE_DESC";
    StaffSort["SearchMatch"] = "SEARCH_MATCH";
})(StaffSort || (StaffSort = {}));
/** Studio sort enums */
export var StudioSort;
(function (StudioSort) {
    StudioSort["Favourites"] = "FAVOURITES";
    StudioSort["FavouritesDesc"] = "FAVOURITES_DESC";
    StudioSort["Id"] = "ID";
    StudioSort["IdDesc"] = "ID_DESC";
    StudioSort["Name"] = "NAME";
    StudioSort["NameDesc"] = "NAME_DESC";
    StudioSort["SearchMatch"] = "SEARCH_MATCH";
})(StudioSort || (StudioSort = {}));
/** Submission sort enums */
export var SubmissionSort;
(function (SubmissionSort) {
    SubmissionSort["Id"] = "ID";
    SubmissionSort["IdDesc"] = "ID_DESC";
})(SubmissionSort || (SubmissionSort = {}));
/** Submission status */
export var SubmissionStatus;
(function (SubmissionStatus) {
    SubmissionStatus["Accepted"] = "ACCEPTED";
    SubmissionStatus["PartiallyAccepted"] = "PARTIALLY_ACCEPTED";
    SubmissionStatus["Pending"] = "PENDING";
    SubmissionStatus["Rejected"] = "REJECTED";
})(SubmissionStatus || (SubmissionStatus = {}));
/** Thread comments sort enums */
export var ThreadCommentSort;
(function (ThreadCommentSort) {
    ThreadCommentSort["Id"] = "ID";
    ThreadCommentSort["IdDesc"] = "ID_DESC";
})(ThreadCommentSort || (ThreadCommentSort = {}));
/** Thread sort enums */
export var ThreadSort;
(function (ThreadSort) {
    ThreadSort["CreatedAt"] = "CREATED_AT";
    ThreadSort["CreatedAtDesc"] = "CREATED_AT_DESC";
    ThreadSort["Id"] = "ID";
    ThreadSort["IdDesc"] = "ID_DESC";
    ThreadSort["IsSticky"] = "IS_STICKY";
    ThreadSort["RepliedAt"] = "REPLIED_AT";
    ThreadSort["RepliedAtDesc"] = "REPLIED_AT_DESC";
    ThreadSort["ReplyCount"] = "REPLY_COUNT";
    ThreadSort["ReplyCountDesc"] = "REPLY_COUNT_DESC";
    ThreadSort["SearchMatch"] = "SEARCH_MATCH";
    ThreadSort["Title"] = "TITLE";
    ThreadSort["TitleDesc"] = "TITLE_DESC";
    ThreadSort["UpdatedAt"] = "UPDATED_AT";
    ThreadSort["UpdatedAtDesc"] = "UPDATED_AT_DESC";
    ThreadSort["ViewCount"] = "VIEW_COUNT";
    ThreadSort["ViewCountDesc"] = "VIEW_COUNT_DESC";
})(ThreadSort || (ThreadSort = {}));
/** User sort enums */
export var UserSort;
(function (UserSort) {
    UserSort["ChaptersRead"] = "CHAPTERS_READ";
    UserSort["ChaptersReadDesc"] = "CHAPTERS_READ_DESC";
    UserSort["Id"] = "ID";
    UserSort["IdDesc"] = "ID_DESC";
    UserSort["SearchMatch"] = "SEARCH_MATCH";
    UserSort["Username"] = "USERNAME";
    UserSort["UsernameDesc"] = "USERNAME_DESC";
    UserSort["WatchedTime"] = "WATCHED_TIME";
    UserSort["WatchedTimeDesc"] = "WATCHED_TIME_DESC";
})(UserSort || (UserSort = {}));
/** The language the user wants to see staff and character names in */
export var UserStaffNameLanguage;
(function (UserStaffNameLanguage) {
    /** The staff or character's name in their native language */
    UserStaffNameLanguage["Native"] = "NATIVE";
    /** The romanization of the staff or character's native name */
    UserStaffNameLanguage["Romaji"] = "ROMAJI";
    /** The romanization of the staff or character's native name, with western name ordering */
    UserStaffNameLanguage["RomajiWestern"] = "ROMAJI_WESTERN";
})(UserStaffNameLanguage || (UserStaffNameLanguage = {}));
/** User statistics sort enum */
export var UserStatisticsSort;
(function (UserStatisticsSort) {
    UserStatisticsSort["Count"] = "COUNT";
    UserStatisticsSort["CountDesc"] = "COUNT_DESC";
    UserStatisticsSort["Id"] = "ID";
    UserStatisticsSort["IdDesc"] = "ID_DESC";
    UserStatisticsSort["MeanScore"] = "MEAN_SCORE";
    UserStatisticsSort["MeanScoreDesc"] = "MEAN_SCORE_DESC";
    UserStatisticsSort["Progress"] = "PROGRESS";
    UserStatisticsSort["ProgressDesc"] = "PROGRESS_DESC";
})(UserStatisticsSort || (UserStatisticsSort = {}));
/** The language the user wants to see media titles in */
export var UserTitleLanguage;
(function (UserTitleLanguage) {
    /** The official english title */
    UserTitleLanguage["English"] = "ENGLISH";
    /** The official english title, stylised by media creator */
    UserTitleLanguage["EnglishStylised"] = "ENGLISH_STYLISED";
    /** Official title in it's native language */
    UserTitleLanguage["Native"] = "NATIVE";
    /** Official title in it's native language, stylised by media creator */
    UserTitleLanguage["NativeStylised"] = "NATIVE_STYLISED";
    /** The romanization of the native language title */
    UserTitleLanguage["Romaji"] = "ROMAJI";
    /** The romanization of the native language title, stylised by media creator */
    UserTitleLanguage["RomajiStylised"] = "ROMAJI_STYLISED";
})(UserTitleLanguage || (UserTitleLanguage = {}));
export const GetAnimeHistoryDocument = gql `
    query GetAnimeHistory(
        $userName: String
        $type: MediaType
        $status: MediaListStatus
        $format: ScoreFormat
    ) {
        MediaListCollection(userName: $userName, type: $type, status: $status) {
            lists {
                entries {
                    id
                    status
                    progress
                    media {
                        title {
                            english
                            userPreferred
                        }
                        coverImage {
                            color
                            large
                        }
                        episodes
                    }
                    startedAt {
                        year
                        month
                        day
                    }
                    completedAt {
                        year
                        month
                        day
                    }
                    score(format: $format)
                }
            }
        }
    }
`;
const defaultWrapper = (action, _operationName, _operationType, _variables) => action();
export function getSdk(client, withWrapper = defaultWrapper) {
    return {
        GetAnimeHistory(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(GetAnimeHistoryDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), "GetAnimeHistory", "query", variables);
        },
    };
}

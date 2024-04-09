<style>
.la-main {
    display: flex;
    width: 800px;
    justify-content: space-between;
}
.la-container {
    display: flex;
    width: 380px;
    flex-direction: column;
}
.la-entry {
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
}
.la-row {
    width: calc(100% - 80px);
    display: flex;
    justify-content: space-between;
}
.anime-title {
    width: 250px;
}
.anime-cover {
    height: 100px;
}
</style>

# anime-stats

<img src="./src/generated/calendar.svg" />

<h2>Last 10 Animes</h2>
<div class="la-main"> 
    {{ lastAnimes }}
</div>

## Why?

When engineering managers are recruiting, they are not only looking for someone with technical prowness, but also
someone who can fit into the team. If the manager happens to have the same taste as you, you're in luck. If not, you're in trouble. So you'd better not rate _objectively_ mid stuffs (e.g. SAO 😭) more than 8. After all, you are what you eat.

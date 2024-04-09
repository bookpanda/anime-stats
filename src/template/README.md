<style>
.la-main {
    display: flex;
    width: 700px;
    justify-content: space-between;
}
.la-container {
    display: flex;
    width: 300px;
    flex-direction: column;
}
.la-entry {
    display: flex;
    flex-direction: column;
}
.la-row {
    display: flex;
    justify-content: space-between;
}
.anime-title {
    width: 250px;
}
</style>

# anime-stats

<img src="./src/generated/calendar.svg" />

<h2>Last 10 Animes</h2>
<div class="la-main"> 
    {{ lastAnimes }}
</div>

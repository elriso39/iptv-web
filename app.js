async function loadList() {
  const code = document.getElementById("iptvCode").value;
  const lists = JSON.parse(localStorage.getItem("iptvLists") || "{}");

  if (!lists[code]) {
    alert("Código no encontrado");
    return;
  }

  let channels = lists[code].channels;

  const container = document.getElementById("channelsContainer");
  container.innerHTML = "";

  channels.forEach(ch => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${ch.name}</h3>
      <video id="${ch.name}" class="video-js vjs-default-skin" controls width="640" height="360"></video>
    `;

    container.appendChild(div);

    const player = videojs(ch.name, {
      autoplay: false,
      liveui: true
    });

    // Fallback automático
    try {
      player.src({
        src: ch.url,
        type: 'application/x-mpegURL'
      });
    } catch (e) {
      console.log("FALLBACK activado para", ch.name);
      player.src(ch.url);
    }
  });
}

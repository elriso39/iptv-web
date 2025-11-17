function loadPreview() {
  const lists = JSON.parse(localStorage.getItem("iptvLists") || "{}");
  document.getElementById("listPreview").textContent = JSON.stringify(lists, null, 2);
}

function addList() {
  const code = document.getElementById("adminCode").value;
  const url = document.getElementById("adminUrl").value;

  const lists = JSON.parse(localStorage.getItem("iptvLists") || "{}");

  lists[code] = {
    url: url,
    channels: []
  };

  localStorage.setItem("iptvLists", JSON.stringify(lists));
  loadPreview();
}

function addChannel() {
  const code = document.getElementById("channelCode").value;
  const name = document.getElementById("channelName").value;
  const url = document.getElementById("channelUrl").value;

  const lists = JSON.parse(localStorage.getItem("iptvLists") || "{}");

  if (!lists[code]) {
    alert("Primero crea la lista usando el código.");
    return;
  }

  lists[code].channels.push({
    name: name,
    url: url
  });

  localStorage.setItem("iptvLists", JSON.stringify(lists));
  loadPreview();
}

loadPreview();

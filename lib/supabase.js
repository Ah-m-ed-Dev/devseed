const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function supabaseFetch(endpoint, method = "GET", body = null) {
  const url = `${supabaseUrl}/rest/v1/${endpoint}`;
  const headers = {
    "apikey": supabaseKey,
    "Authorization": `Bearer ${supabaseKey}`,
    "Content-Type": "application/json",
    "Prefer": "return=representation",
  };
  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);
  const response = await fetch(url, options);
  if (!response.ok) throw new Error("Supabase error");
  return response.json();
}

// الرسائل
export async function createMessage(data) {
  return supabaseFetch("messages", "POST", data);
}
export async function getMessages() {
  return supabaseFetch("messages?order=created_at.desc&select=*");
}
export async function markAsRead(id) {
  return supabaseFetch(`messages?id=eq.${id}`, "PATCH", { read: true });
}
export async function deleteMessage(id) {
  return supabaseFetch(`messages?id=eq.${id}`, "DELETE");
}

// المستخدمين
export async function getUsers() {
  return supabaseFetch("profiles?order=created_at.desc&select=*");
}
export async function createUser(data) {
  if (!data.email || !data.password || !data.name) throw new Error("جميع الحقول مطلوبة");
  return supabaseFetch("profiles", "POST", data);
}
export async function updateUser(id, data) {
  return supabaseFetch(`profiles?id=eq.${id}`, "PATCH", data);
}
export async function deleteUser(id) {
  return supabaseFetch(`profiles?id=eq.${id}`, "DELETE");
}

// المقالات
export async function getPosts() {
  return supabaseFetch("posts?order=created_at.desc&select=*");
}
export async function getPostBySlug(slug) {
  const data = await supabaseFetch(`posts?slug=eq.${encodeURIComponent(slug)}&select=*`);
  return data?.[0] || null;
}
export async function createPost(data) {
  return supabaseFetch("posts", "POST", { ...data, created_at: new Date(), updated_at: new Date() });
}
export async function updatePost(id, data) {
  return supabaseFetch(`posts?id=eq.${id}`, "PATCH", { ...data, updated_at: new Date() });
}
export async function deletePost(id) {
  return supabaseFetch(`posts?id=eq.${id}`, "DELETE");
}

// المشاريع
export async function getProjects() {
  return supabaseFetch("projects?order=created_at.desc&select=*");
}
export async function createProject(data) {
  return supabaseFetch("projects", "POST", data);
}
export async function updateProject(id, data) {
  return supabaseFetch(`projects?id=eq.${id}`, "PATCH", data);
}
export async function deleteProject(id) {
  return supabaseFetch(`projects?id=eq.${id}`, "DELETE");
}

// رفع الصور
export async function uploadImage(file) {
  const fileName = `${Date.now()}-${file.name}`;
  const url = `${supabaseUrl}/storage/v1/object/projects/${fileName}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "apikey": supabaseKey,
      "Authorization": `Bearer ${supabaseKey}`,
      "Content-Type": file.type,
    },
    body: file,
  });
  if (!response.ok) throw new Error("Upload failed");
  return `${supabaseUrl}/storage/v1/object/public/projects/${fileName}`;
}
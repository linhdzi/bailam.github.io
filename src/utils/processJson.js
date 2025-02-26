import jsonData from "@/assets/jameslan.json";

export function getFullDialog() {
  return jsonData.dialog.map((entry) => entry.text).join(" ");
}

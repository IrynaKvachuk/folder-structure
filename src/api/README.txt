foldert structure with api:
{
  "id":string,
  "parentId": string,
  "name": string,
  "type": "folder" | "file",
  "children": Array<Folder | Item>
}
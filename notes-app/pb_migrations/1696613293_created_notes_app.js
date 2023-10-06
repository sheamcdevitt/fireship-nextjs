/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "g670xnhmog6p687",
    "created": "2023-10-06 17:28:13.346Z",
    "updated": "2023-10-06 17:28:13.346Z",
    "name": "notes_app",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qlmwkbot",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g670xnhmog6p687");

  return dao.deleteCollection(collection);
})

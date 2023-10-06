/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g670xnhmog6p687")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e2ecediy",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g670xnhmog6p687")

  // remove
  collection.schema.removeField("e2ecediy")

  return dao.saveCollection(collection)
})

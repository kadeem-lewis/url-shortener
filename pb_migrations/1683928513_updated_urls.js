migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hlo2vt233vtdq39")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fpopx8jd",
    "name": "shortened",
    "type": "url",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hlo2vt233vtdq39")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fpopx8jd",
    "name": "shortened",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})

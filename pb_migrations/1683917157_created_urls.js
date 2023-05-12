migrate((db) => {
  const collection = new Collection({
    "id": "hlo2vt233vtdq39",
    "created": "2023-05-12 18:45:57.387Z",
    "updated": "2023-05-12 18:45:57.387Z",
    "name": "urls",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ssrixwqz",
        "name": "original",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
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
  const collection = dao.findCollectionByNameOrId("hlo2vt233vtdq39");

  return dao.deleteCollection(collection);
})

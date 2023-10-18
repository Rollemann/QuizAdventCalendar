/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y8gm8k0rdqtt1ld",
    "created": "2023-10-18 05:50:36.609Z",
    "updated": "2023-10-18 05:50:36.609Z",
    "name": "Rules",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lavyo9n3",
        "name": "text",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y8gm8k0rdqtt1ld");

  return dao.deleteCollection(collection);
})

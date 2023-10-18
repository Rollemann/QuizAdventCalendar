/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vr6txy1dqx20id5",
    "created": "2023-10-18 18:59:27.640Z",
    "updated": "2023-10-18 18:59:27.640Z",
    "name": "Player",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ekr04her",
        "name": "Name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vjf0uoz5",
        "name": "RoomTimes",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("vr6txy1dqx20id5");

  return dao.deleteCollection(collection);
})

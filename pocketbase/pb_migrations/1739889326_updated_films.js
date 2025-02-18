/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4286007220",
    "max": 0,
    "min": 0,
    "name": "titre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date3633048593",
    "max": "",
    "min": "",
    "name": "date_sortie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1333826038",
    "hidden": false,
    "id": "relation2128342544",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "producteur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1333826038",
    "hidden": false,
    "id": "relation4264581662",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "scenariste",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1462424745",
    "max": 0,
    "min": 0,
    "name": "synopsis",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2471982478",
    "max": 0,
    "min": 0,
    "name": "langue",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2220277813",
    "max": 0,
    "min": 0,
    "name": "duree",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // remove field
  collection.fields.removeById("text4286007220")

  // remove field
  collection.fields.removeById("date3633048593")

  // remove field
  collection.fields.removeById("relation2128342544")

  // remove field
  collection.fields.removeById("relation4264581662")

  // remove field
  collection.fields.removeById("text1462424745")

  // remove field
  collection.fields.removeById("text2471982478")

  // remove field
  collection.fields.removeById("text2220277813")

  return app.save(collection)
})

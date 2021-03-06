const db = require("../models");

module.exports = {
    getAll: async function (req, res) {
        const eagarLoad = req.query.eagarLoad;

        if(eagarLoad === "true") {
            res.json(await db.Table.findAll({include: { all: true, nested: true }}));
        } else {
            res.json(await db.Table.findAll());
        }
    },

    /**
     * get an table from the tables table, client must provide an itemId.
     */
    getById: async function (req, res) {
        const tableId = req.params.tableId;
        const eagarLoad = req.query.eagarLoad;

        let table = undefined;
        
        if(eagarLoad === "true") {
            table = await db.Table.findOne({where: {id: tableId}, include: { all: true, nested: true }});
        } else {
            table = await db.Table.findOne({where: {id: tableId}});
        }

        

        if(!table) {
            return res.status(404).send("cannot find table");
        }

        return res.json(table); 
    },
    getAllAreas: async function (req, res) {
        const eagarLoad = req.query.eagarLoad;

        if(eagarLoad === "true") {
            res.json(await db.TableArea.findAll({include: { all: true, nested: true }}));
        } else {
            res.json(await db.TableArea.findAll());
        }
    },

    /**
     * get an table from the tables table, client must provide an itemId.
     */
    getAreaById: async function (req, res) {
        const tableId = req.params.areaId;
        const eagarLoad = req.query.eagarLoad;

        let tableArea = undefined;
        
        if(eagarLoad === "true") {
            tableArea = await db.TableArea.findOne({where: {id: tableId}, include: { all: true, nested: true }});
        } else {
            tableArea = await db.TableArea.findOne({where: {id: tableId}});
        }

        

        if(!tableArea) {
            return res.status(404).send("cannot find table");
        }

        return res.json(tableArea); 
    },

}
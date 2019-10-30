var orm = {
    all: function(tableInput) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      return connection.query(queryString);
    },
    create: function(table, cols, vals) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      return connection.query(queryString, vals);
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(table, objColVals, condition) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      return connection.query(queryString);
    }
  };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;
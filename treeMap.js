/*
* JavaScript implementation of java.util.TreeMap Class
*
* The java.util.TreeMap class is the Red-Black tree based implementation
* of the Map interface.Following are the important points about TreeMap:
*
* 1) The TreeMap class guarantees that the Map will be in ascending key order.
*
* 2) The Map is sorted according to the natural sort method for the key Class,
* or by the Comparator provided at map creation time,
* that will depend on which constructor used.
*/

function TreeMap() {

    this.dict = {};

    /*
    * <summary>
    * Value get(Object key)
    * This method returns the value to which the specified key is mapped,
    * or null if this map contains no mapping for the key.
    * </summary>
    */
    this.get = function(key){
        return this.dict[key];
    };

    /*
    * <summary>
    * boolean containsKey(Object key)
    * This method returns true
    * if this map contains a mapping for the specified key.
    * </summary>
    */
    this.containsKey = function(key){
        if( this.get(key) !== undefined) {
            return true;
        } else {
            return false;
        }
    };

    /*
    * <summary>
    * Value put(K key, V value)
    * This method associates the specified value with the specified key in this map.
    * </summary>
    */
    this.put = function(key,value) {
        this.dict[key] = value;
        if(isNumber(key))
        {
          if(allKeysAreNumeral(this.dict)) {
            this.dict = sortOnKeys(this.dict);
          }
        }
    };

    /*
    * <summary>
    * Value remove(Object key)
    * This method removes the mapping for this key from this TreeMap if present.
    * </summary>
    */
    this.remove = function(key) {
        'use strict';
        delete this.dict[key];
    };

    /*
    * <summary>
    * void clear()
    * This method removes all of the mappings from this map.
    * </summary>
    */
    this.clear = function(){
        this.dict = {};
    };


    /*
    * <summary>
    * treeMap.foreach(V value)
    * This method returns each value for each keys in the TreeMap.
    * </summary>
    */
    this.forEach = function(callback) {
        var len = this.size();
        for (i = 0; i < len; i++) {
            var item = this.get( Object.keys(this.dict)[i] );
            callback(item);
        }
    }


    /*
    * <summary>
    * int size()
    * This method returns the number of key-value mappings in this map.
    * </summary>
    */
    this.size = function() {
        return Object.keys(this.dict).length;
    };

    /*
    * <summary>
    * boolean isEmpty()
    * This method returns a boolean
    * determining whether the TreeMap is empty or not.
    * </summary>
    */
    this.isEmpty = function() {
        return Object.keys(this.dict).length == 0;
    };


    /*
    * <summary>
    * Key floorKey(K key)
    * This method returns the greatest key less than or equal
    * to the given key, or null if there is no such key.
    * </summary>
    */
    this.floorKey = function(key){
      if(!isNumber(key))
        throw "Invalid Operation: key has to be an integer value";

      if(this.containsKey(key))
        return this.get(key);

      return this.floorKey(key - 1);
    }


    /*
    * <summary>
    * Key ceilingKey(K key)
    * This method returns the least key greater than or equal
    * to the given key, or null if there is no such key.
    * </summary>
    */
    this.ceilingKey = function(key) {
      if(!isNumber(key))
        throw "Invalid Operation: key has to be an integer value";

      if(this.containsKey(key))
        return this.get(key);

      return this.floorKey(key + 1);
    }


    /*
    * <summary>
    * Object clone()
    * This method returns a shallow copy of this TreeMap instance.
    * </summary>
    */
    this.clone = function() {
      return this.dict;
    }


    /*
    * <summary>
    * boolean containsValue(Object value)
    * This method returns true if this map maps one or more keys to the specified value.
    * </summary>
    */
    this.containsValue = function(value) {
      var len = this.size();
      for (i = 0; i < len; i++) {
          var item = this.get( Object.keys(this.dict)[i] );
          if(value === item)
            return true;
      }

      return false;
    }


    /*
    * <summary>
    * Set<K> keySet()
    * This method returns a Set view of the keys contained in this map.
    * </summary>
    */
    this.keySet = function() {
      var set = [];
      var len = this.size();
      for (i = 0; i < len; i++) {
        set.push(Object.keys(this.dict)[i]);
      }

      return set;
    }


    /*
    * <summary>
    * Key firstKey()
    * This method returns the first (lowest) key currently in this map.
    * </summary>
    */
    this.firstKey = function() {
      return Object.keys(this.dict)[0];
    }


    /*
    * <summary>
    * Key lastKey()
    * This method returns the last (highest) key currently in this map.
    * </summary>
    */
    this.lastKey = function() {
      var len = this.size();
      return Object.keys(this.dict)[len - 1];
    }

}

function isNumber( input ) {
  return !isNaN( input );
}

function sortOnKeys(dict) {

    var sorted = [];
    for(var key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();

    var tempDict = {};
    for(var i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }

    return tempDict;
}

function allKeysAreNumeral(dict) {
  for(var key in dict) {
      if(!isNumber(key))
        return false;
  }

  return true;
}

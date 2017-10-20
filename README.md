# JavaScript-implementation-of-java.util.TreeMap-Class
This library implements the java.util.TreeMap Class and some of it's popular methods using JavaScript. This library can be imported and used in your JavaScript projects, where you may need or want to use TreeMap&lt;Key, Value>().


# How to utilise TreeMap<Key, Value>() in your JavaScript projects
Just import/include the treeMpa.js file in your project and you are good to go.

Use something like this:

    <html>
    <script src = "treeMap.js"></script>
    </html>
    
# Using TreeMap in you JavaScript projects
### Initialise a TreeMap in your code like this:

     var myTreeMap = new Map();
     
### Adding new key, value to your TreeMap variable:

    myTreeMap.put(1,"First Value");
    myTreeMap.put(2,"Second Value");
    myTreeMap.put(3,"Third Value");
    myTreeMap.put(4,"Fourth Value");
### List of method of TreeMap implemented in this library:

* **Value put(K key, V value)**
    * **Value get(Object key)**
    * **Key firstKey()**
    * **Key lastKey()**
    * **boolean containsKey(Object key)**
    * **boolean containsValue(Object value)**
    * **Value remove(Object key)**
    * **void clear()**
    * **Key floorKey(K key)**
    * **Key ceilingKey(K key)**
    * **Object clone()**
    * **int size()**
    * **Set<K> keySet()**
    * **void treeMap.foreach(V value)**
    * **boolean isEmpty()**

import React from 'react';

import { View, Text,TouchableOpacity} from 'react-native';

const Listview=({tasks, changetaskstat})=>(
    <View style={{padding:30}}>
        {tasks.map(task=>
            <TouchableOpacity key={task.id} onPress={()=>changetaskstat(task.id)}>
                <Text style={{fontSize:25, padding:2,textDecorationLine:task.completed? 'line-through':'none'}}>{task.text}</Text>
            </TouchableOpacity>   
        )}
    </View>
)

export default Listview;
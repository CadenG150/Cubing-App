import * as React from 'react';
import { Button, View, Image, Text, Platform, StyleSheet, Component, TouchableOpacity, SafeAreaView, ScrollView, AsyncStorage} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MultipleChoice from 'react-native-multiple-choice';
import PropTypes from 'prop-types';
//import { CheckBox } from 'react-native-elements';

var inverse_algorithms = [{
  "case" : "OLL_1",
  "algorithm" : "F R' F' R U2 F R' F' R2 U2 R'",
  "set" : "noEdgesOriented",
},
{
  "case" : "OLL_2",
  "algorithm" : "f U R U' R' f' F U R U' R' F'",
  "set" : "noEdgesOriented",
},
{
  "case" : "OLL_3",
  "algorithm" : "F U R U' R' F' U f U R U' R' f' y",
  "set" : "noEdgesOriented",
},
{
  "case" : "OLL_4",
  "algorithm" : "F U R U' R' F' U' f U R U' R' f' y",
  "set" : "noEdgesOriented",
},
{
  "case" : "OLL_5",
  "algorithm" : "r' U' R U' R' U2 r",
  "set" : "square",
},
{
  "case" : "OLL_6",
  "algorithm" : "r U R' U R U2 r'",
  "set" : "square",
},
{
  "case" : "OLL_7",
  "algorithm" : "r U2 R' U' R U' r'",
  "set" : "smallLightningBolt",
},
{
  "case" : "OLL_8",
  "algorithm" : "r' U2 R U R' U r y2",
  "set" : "smallLightningBolt",
},
{
  "case" : "OLL_9",
  "algorithm" : "F U R U' R2 F' R U R U' R' y'",
  "set" : "fish",
},
{
  "case" : "OLL_10",
  "algorithm" : "R U2 R' F R' F' R U' R U' R'",
  "set" : "fish",
},
{
  "case" : "OLL_11",
  "algorithm" : "M U' R U2 R' U' R U' R2 r",
  "set" : "smallLightningBolt",
},
{
  "case" : "OLL_12",
  "algorithm" : "F U R U' R' F' U' F U R U' R' F'",
  "set" : "smallLightningBolt",
},
{
  "case" : "OLL_13",
  "algorithm" : "F' U' F r U' r' U r U r'",
  "set" : "knight",
},
{
  "case" : "OLL_14",
  "algorithm" : "F U F' R' F R U' R' F' R",
  "set" : "knight",
},
{
  "case" : "OLL_15",
  "algorithm" : "r' U' r U' R' U R r' U r",
  "set" : "knight",
},
{
  "case" : "OLL_16",
  "algorithm" : "r U r' U R U' R' r U' r'",
  "set" : "knight",
},
{
  "case" : "OLL_17",
  "algorithm" : "F R' F' R U2 F R' F' R U' R U' R'",
  "set" : "noEdgesOriented",
},
{
  "case" : "OLL_18",
  "algorithm" : "r' U2 R U R' U r2 U2 R' U' R U' r'",
  "set" : "noEdgesOriented",
},
{
  "case" : "OLL_19",
  "algorithm" : "F R' F' R M U R U' R' U' M'",
  "set" : "noEdgesOriented",
},
{
  "case" : "OLL_20",
  "algorithm" : "r U R' U' M2 U R U' R' U' M'",
  "set" : "noEdgesOriented",
},
{
  "case" : "OLL_21",
  "algorithm" : "R U R' U R U' R' U R U2 R'",
  "set" : "allEdgesOriented",
},
{
  "case" : "OLL_22",
  "algorithm" : "R U2 R2 U' R2 U' R2 U2 R",
  "set" : "allEdgesOriented",
},
{
  "case" : "OLL_23",
  "algorithm" : "R U2 R D R' U2 R D' R2",
  "set" : "allEdgesOriented",
},
{
  "case" : "OLL_24",
  "algorithm" : "F R' F' r U R U' r'",
  "set" : "allEdgesOriented",
},
{
  "case" : "OLL_25",
  "algorithm" : "F' r U R' U' r' F R",
  "set" : "allEdgesOriented",
},
{
  "case" : "OLL_26",
  "algorithm" : "R U R' U R U2 R'",
  "set" : "allEdgesOriented",
},
{
  "case" : "OLL_27",
  "algorithm" : "R U2 R' U' R U' R'",
  "set" : "allEdgesOriented",
},
{
  "case" : "OLL_28",
  "algorithm" : "R U R' U' M' U R U' r'",
  "set" : "allCornersOriented",
},
{
  "case" : "OLL_29",
  "algorithm" : "M F R' F' R U R U' R' U' M'",
  "set" : "awkward",
},
{
  "case" : "OLL_30",
  "algorithm" : "F U R U2 R' U R U2 R' U' F'",
  "set" : "awkward",
},
{
  "case" : "OLL_31",
  "algorithm" : "R' F R U R' U' F' U R",
  "set" : "p",
},
{
  "case" : "OLL_32",
  "algorithm" : "f R' F' R U R U' R' S'",
  "set" : "p",
},
{
  "case" : "OLL_33",
  "algorithm" : "F R' F' R U R U' R'",
  "set" : "t",
},
{
  "case" : "OLL_34",
  "algorithm" : "F U R' U' R' F' R U R2 U' R'",
  "set" : "c",
},
{
  "case" : "OLL_35",
  "algorithm" : "R U2 R' F R' F' R2 U2 R'",
  "set" : "fish",
},
{
  "case" : "OLL_36",
  "algorithm" : "F' L F L' U' L' U' L U L' U L",
  "set" : "w",
},
{
  "case" : "OLL_37",
  "algorithm" : "F R U' R' U R U R' F'",
  "set" : "fish",
},
{
  "case" : "OLL_38",
  "algorithm" : "F R' F' R U R U R' U' R U' R'",
  "set" : "w",
},
{
  "case" : "OLL_39",
  "algorithm" : "R U2 R' U' F' U F R U' R'",
  "set" : "bigLightningBolts",
},
{
  "case" : "OLL_40",
  "algorithm" : "R' U' F U R U' R' F' R",
  "set" : "bigLightningBolts",
},
{
  "case" : "OLL_41",
  "algorithm" : "F U R U' R' F' R U2 R' U' R U' R'",
  "set" : "awkward",
},
{
  "case" : "OLL_42",
  "algorithm" : "F U R U' R' F' R' U2 R U R' U R'",
  "set" : "awkward",
},
{
  "case" : "OLL_43",
  "algorithm" : "R' F' U' F U R",
  "set" : "p",
},
{
  "case" : "OLL_44",
  "algorithm" : "f U R U' R' f'",
  "set" : "p",
},
{
  "case" : "OLL_45",
  "algorithm" : "F U R U' R' F'",
  "set" : "t",
},
{
  "case" : "OLL_46",
  "algorithm" : "R' U' F R' F' R U R",
  "set" : "c",
},
{
  "case" : "OLL_47",
  "algorithm" : "R' U' F R' F' R F R' F' R U R",
  "set" : "l",
},
{
  "case" : "OLL_48",
  "algorithm" : "F U R U' R' U R U' R' F'",
  "set" : "l",
},
{
  "case" : "OLL_49",
  "algorithm" : "r' U r2 U' r2 U' r2 U r'",   
  "set" : "l",
},
{
  "case" : "OLL_50",
  "algorithm" : "r U' r2 U r2 U r2 U' r",    
  "set" : "l",
},
{
  "case" : "OLL_51",
  "algorithm" : "f U R U' R' U R U' R' f'",    
  "set" : "bar",
},
{
  "case" : "OLL_52",
  "algorithm" : "R' F' U' F U' R U R' U R",    
  "set" : "bar",
},
{
  "case" : "OLL_53",
  "algorithm" : "r' U2 R U R' U' R U R' U r",    
  "set" : "l",
},
{
  "case" : "OLL_54",
  "algorithm" : "r U2 R' U' R U R' U' R U' r'",    
  "set" : "l",
},
{
  "case" : "OLL_55",
  "algorithm" : "F R' F' U2 R U R' U R2 U2 R'",    
  "set" : "bar",
},
{
  "case" : "OLL_56",
  "algorithm" : "r U r' R U R' U' R U R' U' r U' r'",    
  "set" : "bar",
},
{
  "case" : "OLL_57",
  "algorithm" : "r U R' U' M U R U' R'",    
  "set" : "allCornersOriented",
},
{
  "case" : "PLL_1",
  "algorithm" : "R2 D2 R U R' D2 R U' R x'",    
  "set" : "Aa",
},
{
  "case" : "PLL_2",
  "algorithm" : "R2 D2 R' U' R D2 R' U R' x",    
  "set" : "Ab",
},
{
  "case" : "PLL_3",
  "algorithm" : "D R U R' D' R U' R' D R U' R' D' R U R' x",    
  "set" : "E",
},
{
  "case" : "PLL_4",
  "algorithm" : "R' U' R U' R' U R U R2 F' R U R U' R' F U R U",    
  "set" : "F",
},
{
  "case" : "PLL_5",
  "algorithm" : "D R' U' R U D' R2 U R' U R U' R U' R2",    
  "set" : "Ga",
},
{
  "case" : "PLL_6",
  "algorithm" : "D' R2 U R' U R' U' R U' R2 D U' R' U R",    
  "set" : "Gb",
},
{
  "case" : "PLL_7",
  "algorithm" : "R2 F' R U R U' R' F' R U2 R' U2 R' F2 R2 U2",    
  "set" : "Gc",
},
{
  "case" : "PLL_8",
  "algorithm" : "D R2 U' R U' R U R' U R2 D' U R U' R'",    
  "set" : "Gd",
},
{
  "case" : "PLL_9",
  "algorithm" : "M2 U' M2 U2 M2 U' M2",    
  "set" : "H",
},
{
  "case" : "PLL_10",
  "algorithm" : "r' R' U2 R U R' U2 L U' R",    
  "set" : "Ja",
},
{
  "case" : "PLL_11",
  "algorithm" : "R U R2 F' R U R U' R' F R U' R'",    
  "set" : "Jb",
},
{
  "case" : "PLL_12",
  "algorithm" : "R U R' U2 R U R2 F' R U R U' R' F R U' R' U' R U' R'",    
  "set" : "Na",
},
{
  "case" : "PLL_13",
  "algorithm" : "D' R U' R2 D R' U D' R U' R2 D R' U z'",    
  "set" : "Nb",
},
{
  "case" : "PLL_14",
  "algorithm" : "R U2 R' U' R' F' R U2 R U2 R' F R U' R'",    
  "set" : "Ra",
},
{
  "case" : "PLL_15",
  "algorithm" : "U R2 F R U R U' R' F' R U2 R' U2 R",    
  "set" : "Rb",
},
{
  "case" : "PLL_16",
  "algorithm" : "F R U' R' U R U R2 F' R U R U' R'",    
  "set" : "T",
},
{
  "case" : "PLL_17",
  "algorithm" : "M2 U' M U2 M' U' M2",    
  "set" : "Ua",
},
{
  "case" : "PLL_18",
  "algorithm" : "M2 U M U2 M' U M2",    
  "set" : "Ub",
},
{
  "case" : "PLL_19",
  "algorithm" : "F' R' F' R U' R U R2 F R y' U R U' R",    
  "set" : "V",
},
{
  "case" : "PLL_20",
  "algorithm" : "F R' F' R U R U' R' F R U' R' U R U R' F'",    
  "set" : "Y",
},
{
  "case" : "PLL_21",
  "algorithm" : "M U2 M2 U2 M U' M2 U' M2",    
  "set" : "Z",
}
];

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>A Cubing App For Learning And Training Algorithms</Text>
        </View>
        <View style={styles.navbar}>
          <Button
            title="Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Algorithms"
            onPress={() => this.props.navigation.navigate('Algorithms')}
          />
          <Button
            title="Trainer"
            onPress={() => this.props.navigation.navigate('Trainer')}
          />
          <Button
            title="Save Data"
            onPress={this.saveData}
          />
          <Button
            title="Display Data"
            onPress={this.displayData}
          />
          <Button
            title="Test Variables"
            onPress={this.getAlgorithms}
          />
        </View>
      </View>
    );
  }
  saveData() {
    let user = 'John Doe';
    AsyncStorage.setItem('user', user)
  }

  displayData = async ()=> {
    try {
      let user = await AsyncStorage.getItem('user');
      alert(user);
    }

    catch(error) {
      alert(error);
    }
  }

  getAlgorithms() {
    // let saved_sets = await AsyncStorage.getItem('saved_sets') // This will read the sets when I add in saving
    saved = ["fish", "square"] // This needs to pull the ones they selected from the checkboxes/local storage
    algstotrain = []
    for (let x = 0; x < saved.length; x++) {
      const currentcase = saved[x];
      for (let y = 0; x< inverse_algorithms.length; y++) {
        if (currentcase == inverse_algorithms[y].set) {
          algstotrain.push(inverse_algorithms[y].algorithm)
        }
      }
    }
  }
}

class Algorithms extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Click On An Algorithm Set To Get Started</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('OLL')}>
          <Text style={styles.headerText}>OLL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('PLL')}>
          <Text style={styles.headerText}>PLL</Text>
        </TouchableOpacity>
        {/*<TouchableOpacity onPress={() => alert("Coming Soon")}>
          <Text style={styles.headerText}>CMLL - Coming Soon</Text>
    </TouchableOpacity>*/}
        </View>
        <View style={styles.navbar}>
          <Button
            title="Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Algorithms"
            onPress={() => this.props.navigation.navigate('Algorithms')}
          />
          <Button
            title="Trainer"
            onPress={() => this.props.navigation.navigate('Trainer')}
          />
        </View>
      </View>
    );
  }
}

class Trainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Trainer</Text>
        </View>
        <View style={styles.scrambles}>
          <Text style={styles.scramble}>This Is Where The Scrambler Goes</Text>
        </View>
      </View>
    )
  }
}

class OLL extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>OLL</Text>
            <Text style={styles.smallHeader}>Click On A Case's Name To See The Algorithm</Text>
          </View>
          <MultipleChoice
            options={[
            'All Edges Oriented',
            'No Edges Oriented',
            'P Shapes',
            'W Shapes',
            'L Shapes',
            'C Shapes',
            'T Shapes',
            'Bar Shapes',
            'Square Shapes',
            'Big Lightning Bolt Shapes',
            'Small Lightning Bolt Shapes',
            'Fish Shapes',
            'Knight Shapes',
            'Awkward Shapes',
            'All Corners Oriented'
            ]}
            onSelection={(option)=>alert(option + ' was selected!')}
          />
          <View style={styles.images}>
          </View>
          <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U2 R2 F R F' U2 R' F R F'")}>
              <Text style={styles.algorithmstext}>OLL 1 &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-1.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: F R U R' U' F' f R U R' U' f'")}>
              <Text style={styles.algorithmstext}>OLL 2 &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-2.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>  
            <TouchableOpacity onPress={() => alert("Algorithms: y' f R U R' U' f' U' F R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 3 &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-3.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y' f R U R' U' f' U F R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 4 &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-4.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r' U2 R U R' U r")}>
              <Text style={styles.algorithmstext}>OLL 5 &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-5.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U2 R' U' R U' r'")}>
              <Text style={styles.algorithmstext}>OLL 6 &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-6.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U R' U R U2 r'")}>
              <Text style={styles.algorithmstext}>OLL 7 &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-7.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y2 r' U' R U' R' U2 r")}>
              <Text style={styles.algorithmstext}>OLL 8 &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-8.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y R U R' U' R' F R2 U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 9 &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-9.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U R' F R F' R U2 R' ")}>
              <Text style={styles.algorithmstext}>OLL 10</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-10.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r' R2 U R' U R U2 R' U M'")}>
              <Text style={styles.algorithmstext}>OLL 11</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-11.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: F R U R' U' F' U F R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 12</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-12.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U' r' U' r U r' F' U F")}>
              <Text style={styles.algorithmstext}>OLL 13</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-13.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' F R U R' F' R F U' F'")}>
              <Text style={styles.algorithmstext}>OLL 14</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-14.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r' U' r R' U' R U r' U r")}>
              <Text style={styles.algorithmstext}>OLL 15</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-15.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U r' R U R' U' r U' r'")}>
              <Text style={styles.algorithmstext}>OLL 16</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-16.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U R' F R F' U2 R' F R F'")}>
              <Text style={styles.algorithmstext}>OLL 17</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-17.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U R' U R U2 r2 U' R U' R' U2 r")}>
              <Text style={styles.algorithmstext}>OLL 18</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-18.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M U R U R' U' M' R' F R F'")}>
              <Text style={styles.algorithmstext}>OLL 19</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-19.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M U R U R' U' M2 U R U' r'")}>
              <Text style={styles.algorithmstext}>OLL 20</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-20.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y R U2 R' U' R U R' U' R U' R'")}>
              <Text style={styles.algorithmstext}>OLL 21</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-21.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U2 R2 U' R2 U' R2 U2 R")}>
              <Text style={styles.algorithmstext}>OLL 22</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-22.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R2 D R' U2 R D' R' U2 R'")}>
              <Text style={styles.algorithmstext}>OLL 23</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-23.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U R' U' r' F R F'")}>
              <Text style={styles.algorithmstext}>OLL 24</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-24.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y F' r U R' U' r' F R")}>
              <Text style={styles.algorithmstext}>OLL 25</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-25.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y R U2 R' U' R U' R'")}>
              <Text style={styles.algorithmstext}>OLL 26</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-26.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U R U2 R'")}>
              <Text style={styles.algorithmstext}>OLL 27</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-27.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U R' U' M U R U' R'")}>
              <Text style={styles.algorithmstext}>OLL 28</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-28.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M U R U R' U' R' F R F' M'")}>
              <Text style={styles.algorithmstext}>OLL 29</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-29.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y2 F U R U2 R' U' R U2 R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 30</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-30.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U' F U R U' R' F' R")}>
              <Text style={styles.algorithmstext}>OLL 31</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-31.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: S R U R' U' R' F R f'")}>
              <Text style={styles.algorithmstext}>OLL 32</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-32.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U' R' F R F'")}>
              <Text style={styles.algorithmstext}>OLL 33</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-33.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y2 R U R2 U' R' F R U R U' F'")}>
              <Text style={styles.algorithmstext}>OLL 34</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-34.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U2 R2 F R F' R U2 R'")}>
              <Text style={styles.algorithmstext}>OLL 35</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-35.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y2 L' U' L U' L' U L U L F' L' F")}>
              <Text style={styles.algorithmstext}>OLL 36</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-36.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: F R U' R' U' R U R' F'")}>
              <Text style={styles.algorithmstext}>OLL 37</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-37.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U R U' R' U' R' F R F'")}>
              <Text style={styles.algorithmstext}>OLL 38</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-38.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y' R U R' F' U' F U R U2 R'")}>
              <Text style={styles.algorithmstext}>OLL 39</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-39.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y R' F R U R' U' F' U R")}>
              <Text style={styles.algorithmstext}>OLL 40</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-40.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y2 R U R' U R U2 R' F R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 41</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-41.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U' R U' R' U2 R F R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 42</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-42.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y R' U' F' U F R")}>
              <Text style={styles.algorithmstext}>OLL 43</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-43.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: f R U R' U' f'")}>
              <Text style={styles.algorithmstext}>OLL 44</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-44.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: F R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 45</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-45.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U' R' F R F' U R")}>
              <Text style={styles.algorithmstext}>OLL 46</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-46.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U' R' F R F' R' F R F' U R")}>
              <Text style={styles.algorithmstext}>OLL 47</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-47.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: F R U R' U' R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 48</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-48.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y2 r U' r2 U r2 U r2 U' r")}>
              <Text style={styles.algorithmstext}>OLL 49</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-49.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r' U r2 U' r2 U' r2 U r'")}>
              <Text style={styles.algorithmstext}>OLL 50</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-50.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: f R U R' U' R U R' U' f'")}>
              <Text style={styles.algorithmstext}>OLL 51</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-51.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U' R U' R' U F' U F R")}>
              <Text style={styles.algorithmstext}>OLL 52</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-52.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r' U' R U' R' U R U' R' U2 r")}>
              <Text style={styles.algorithmstext}>OLL 53</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-53.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U R' U R U' R' U R U2 r'")}>
              <Text style={styles.algorithmstext}>OLL 54</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-54.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U2 R2 U' R U' R' U2 F R F'")}>
              <Text style={styles.algorithmstext}>OLL 55</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-55.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U r' U R U' R' U R U' R' r U' r'")}>
              <Text style={styles.algorithmstext}>OLL 56</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-56.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U' M' U R U' r'")}>
              <Text style={styles.algorithmstext}>OLL 57</Text>
            </TouchableOpacity>
              <Image source={require('./images/OLL-57.png')} style={styles.image}></Image>
            </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

class PLL extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>PLL</Text>
          </View>
          <MultipleChoice
            options={[
            'Ua',
            'Ub',
            'H',
            'Z',
            'Aa',
            'Ab',
            'E',
            'Ga',
            'Gb',
            'Gc',
            'Gd',
            'Ra',
            'Rb',
            'Ja',
            'Jb',
            'Na',
            'Nb',
            'Y',
            'F',
            'T',
            'V'
            ]}
            onSelection={(option)=>alert(option + ' was selected!')}
          />
          <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: x R' U R' D2 R U' R' D2 R2")}>
              <Text style={styles.algorithmstext}>PLL 1 - Aa</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-1.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: x' R U' R D2 R' U R D2 R2")}>
              <Text style={styles.algorithmstext}>PLL 2 - Ab</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-2.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: x' R U' R' D R U R' D' R U R' D R U' R' D'")}>
              <Text style={styles.algorithmstext}>PLL 3 - E &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-3.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: U' R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R")}>
              <Text style={styles.algorithmstext}>PLL 4 - F &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-4.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R2 U R' U R' U' R U' R2 D U' R' U R D'")}>
              <Text style={styles.algorithmstext}>PLL 5- Ga</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-5.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U' R U D' R2 U R' U R U' R U' R2 D")}>
              <Text style={styles.algorithmstext}>PLL 6 - Gb</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-6.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: U2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2")}>
              <Text style={styles.algorithmstext}>PLL 7 - Gc</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-7.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U' D R2  U'R U' R' U R' U R2 D'")}>
              <Text style={styles.algorithmstext}>PLL 8 - Gd</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-8.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M2 U M2 U2 M2 U M2")}>
              <Text style={styles.algorithmstext}>PLL 9 - H &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-9.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U L' U2 R U' R' U2 R r")}>
              <Text style={styles.algorithmstext}>PLL 10 - Ja</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-10.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' F' R U R' U' R' F R2 U' R'")}>
              <Text style={styles.algorithmstext}>PLL 11 - Jb</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-11.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'")}>
              <Text style={styles.algorithmstext}>PLL 12 - Na</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-12.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: z U' R D' R2 U R' D U' R D' R2 U R' D")}>
              <Text style={styles.algorithmstext}>PLL 13 - Nb</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-13.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' F' R U2 R' U2 R' F R U R U2 R'")}>
              <Text style={styles.algorithmstext}>PLL 14 - Ra</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-14.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U2 R U2 R' F R U R' U' R' F' R2 U'")}>
              <Text style={styles.algorithmstext}>PLL 15 - Rb</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-15.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U' R' F R2 U' R' U' R U R' F' ")}>
              <Text style={styles.algorithmstext}>PLL 16 - T &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-16.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M2 U M U2 M' U M2")}>
              <Text style={styles.algorithmstext}>PLL 17 - Ua</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-17.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M2 U' M U2 M' U' M2")}>
              <Text style={styles.algorithmstext}>PLL 18 - Ub</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-18.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U R' U' y R' F' R2 U' R' U R' F R F")}>
              <Text style={styles.algorithmstext}>PLL 19 - V &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-19.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: F R U' R' U' R U R' F' R U R' U' R' F R F'")}>
              <Text style={styles.algorithmstext}>PLL 20 - Y &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-20.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M2 U M2 U M' U2 M2 U2 M'")}>
              <Text style={styles.algorithmstext}>PLL 21 - Z &nbsp;</Text>
            </TouchableOpacity>
              <Image source={require('./images/PLL-21.png')} style={styles.image}></Image>
            </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

class CMLL extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CMLL - Coming Soon</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 36,
    padding: 20,
  },
  smallHeader: {
    color: 'black',
    fontSize: 28,
    padding: 20,
  },
  algorithms: {
    flex: 1,
    flexDirection: 'row',
  },
  algorithmstext: {
    fontSize: 40,
    padding: 20,
  },
  images: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'absolute',
  },
  image: {
    height: 100,
    width: 100,
  },
  scrambles: {
    
  },
  scramble: {
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navbar: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  }
});

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Algorithms: Algorithms,
  Trainer: Trainer,
  OLL: OLL,
  PLL: PLL,
  CMLL: CMLL,
});

export default createAppContainer(RootStack);
import * as React from 'react';
import { Button, View, Image, Text, Platform, StyleSheet, Component, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
        </View>
      </View>
    );
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
          </View>
          <View style={styles.images}>
          </View>
          <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U2 R2 F R F' U2 R' F R F'")}>
              <Text style={styles.algorithmstext}>OLL 1</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-1.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: F R U R' U' F' f R U R' U' f'")}>
              <Text style={styles.algorithmstext}>OLL 2</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-2.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>  
            <TouchableOpacity onPress={() => alert("Algorithms: y' f R U R' U' f' U' F R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 3</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-3.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y' f R U R' U' f' U F R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 4</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-4.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r' U2 R U R' U r")}>
              <Text style={styles.algorithmstext}>OLL 5</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-5.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U2 R' U' R U' r'")}>
              <Text style={styles.algorithmstext}>OLL 6</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-6.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U R' U R U2 r'")}>
              <Text style={styles.algorithmstext}>OLL 7</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-7.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y2 r' U' R U' R' U2 r")}>
              <Text style={styles.algorithmstext}>OLL 8</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-8.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y R U R' U' R' F R2 U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 9</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-9.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U R' F R F' R U2 R' ")}>
              <Text style={styles.algorithmstext}>OLL 10</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-10.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r' R2 U R' U R U2 R' U M'")}>
              <Text style={styles.algorithmstext}>OLL 11</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-11.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: F R U R' U' F' U F R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 12</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-12.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U' r' U' r U r' F' U F")}>
              <Text style={styles.algorithmstext}>OLL 13</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-13.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' F R U R' F' R F U' F'")}>
              <Text style={styles.algorithmstext}>OLL 14</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-14.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r' U' r R' U' R U r' U r")}>
              <Text style={styles.algorithmstext}>OLL 15</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-15.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U r' R U R' U' r U' r'")}>
              <Text style={styles.algorithmstext}>OLL 16</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-16.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U R' F R F' U2 R' F R F'")}>
              <Text style={styles.algorithmstext}>OLL 17</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-17.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U R' U R U2 r2 U' R U' R' U2 r")}>
              <Text style={styles.algorithmstext}>OLL 18</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-18.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M U R U R' U' M' R' F R F'")}>
              <Text style={styles.algorithmstext}>OLL 19</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-19.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M U R U R' U' M2 U R U' r'")}>
              <Text style={styles.algorithmstext}>OLL 20</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-20.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y R U2 R' U' R U R' U' R U' R'")}>
              <Text style={styles.algorithmstext}>OLL 21</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-21.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U2 R2 U' R2 U' R2 U2 R")}>
              <Text style={styles.algorithmstext}>OLL 22</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-22.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R2 D R' U2 R D' R' U2 R'")}>
              <Text style={styles.algorithmstext}>OLL 23</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-23.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U R' U' r' F R F'")}>
              <Text style={styles.algorithmstext}>OLL 24</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-24.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y F' r U R' U' r' F R")}>
              <Text style={styles.algorithmstext}>OLL 25</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-25.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y R U2 R' U' R U' R'")}>
              <Text style={styles.algorithmstext}>OLL 26</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-26.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U R U2 R'")}>
              <Text style={styles.algorithmstext}>OLL 27</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-27.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U R' U' M U R U' R'")}>
              <Text style={styles.algorithmstext}>OLL 28</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-28.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M U R U R' U' R' F R F' M'")}>
              <Text style={styles.algorithmstext}>OLL 29</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-29.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y2 F U R U2 R' U' R U2 R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 30</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-30.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U' F U R U' R' F' R")}>
              <Text style={styles.algorithmstext}>OLL 31</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-31.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: S R U R' U' R' F R f'")}>
              <Text style={styles.algorithmstext}>OLL 32</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-32.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U' R' F R F'")}>
              <Text style={styles.algorithmstext}>OLL 33</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-33.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y2 R U R2 U' R' F R U R U' F'")}>
              <Text style={styles.algorithmstext}>OLL 34</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-34.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U2 R2 F R F' R U2 R'")}>
              <Text style={styles.algorithmstext}>OLL 35</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-35.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y2 L' U' L U' L' U L U L F' L' F")}>
              <Text style={styles.algorithmstext}>OLL 36</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-36.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: F R U' R' U' R U R' F'")}>
              <Text style={styles.algorithmstext}>OLL 37</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-37.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U R U' R' U' R' F R F'")}>
              <Text style={styles.algorithmstext}>OLL 38</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-38.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y' R U R' F' U' F U R U2 R'")}>
              <Text style={styles.algorithmstext}>OLL 39</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-39.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y R' F R U R' U' F' U R")}>
              <Text style={styles.algorithmstext}>OLL 40</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-40.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y2 R U R' U R U2 R' F R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 41</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-41.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U' R U' R' U2 R F R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 42</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-42.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y R' U' F' U F R")}>
              <Text style={styles.algorithmstext}>OLL 43</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-43.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: f R U R' U' f'")}>
              <Text style={styles.algorithmstext}>OLL 44</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-44.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: F R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 45</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-45.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U' R' F R F' U R")}>
              <Text style={styles.algorithmstext}>OLL 46</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-46.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U' R' F R F' R' F R F' U R")}>
              <Text style={styles.algorithmstext}>OLL 47</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-47.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: F R U R' U' R U R' U' F'")}>
              <Text style={styles.algorithmstext}>OLL 48</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-48.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: y2 r U' r2 U r2 U r2 U' r")}>
              <Text style={styles.algorithmstext}>OLL 49</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-49.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r' U r2 U' r2 U' r2 U r'")}>
              <Text style={styles.algorithmstext}>OLL 50</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-50.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: f R U R' U' R U R' U' f'")}>
              <Text style={styles.algorithmstext}>OLL 51</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-51.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U' R U' R' U F' U F R")}>
              <Text style={styles.algorithmstext}>OLL 52</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-52.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r' U' R U' R' U R U' R' U2 r")}>
              <Text style={styles.algorithmstext}>OLL 53</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-53.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: ")}>
              <Text style={styles.algorithmstext}>OLL 54</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-54.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U2 R2 U' R U' R' U2 F R F'")}>
              <Text style={styles.algorithmstext}>OLL 55</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-55.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: r U r' U R U' R' U R U' R' r U' r'")}>
              <Text style={styles.algorithmstext}>OLL 56</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-56.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U' M' U R U' r'")}>
              <Text style={styles.algorithmstext}>OLL 57</Text>
            </TouchableOpacity>
              <Image source={require('./OLL-57.png')} style={styles.image}></Image>
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
          <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: x R' U R' D2 R U' R' D2 R2")}>
              <Text style={styles.algorithmstext}>PLL 1 - Aa</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-1.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: x' R U' R D2 R' U R D2 R2")}>
              <Text style={styles.algorithmstext}>PLL 2 - Ab</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-2.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: x' (R U' R') D (R U R') D' (R U R') D (R U' R') D'")}>
              <Text style={styles.algorithmstext}>PLL 3 - E</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-3.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: U' (R' U' F') (R U R' U' R' F R2 U' R' U' R U R') U R")}>
              <Text style={styles.algorithmstext}>PLL 4 - F</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-4.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R2 U R' U R' U' R U' R2 D U' R' U R D'")}>
              <Text style={styles.algorithmstext}>PLL 5- Ga</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-5.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U' R U D' R2 U R' U R U' R U' R2 D")}>
              <Text style={styles.algorithmstext}>PLL 6 - Gb</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-6.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: U2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2")}>
              <Text style={styles.algorithmstext}>PLL 7 - Gc</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-7.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U' D R2  U'R U' R' U R' U R2 D'")}>
              <Text style={styles.algorithmstext}>PLL 8 - Gd</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-8.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M2 U M2 U2 M2 U M2")}>
              <Text style={styles.algorithmstext}>PLL 9 - H</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-9.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U L' U2 R U' R' U2 R r")}>
              <Text style={styles.algorithmstext}>PLL 10 - Ja</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-10.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' F' R U R' U' R' F R2 U' R'")}>
              <Text style={styles.algorithmstext}>PLL 11 - Jb</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-11.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'")}>
              <Text style={styles.algorithmstext}>PLL 12 - Na</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-12.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: z U' R D' R2 U R' D U' R D' R2 U R' D")}>
              <Text style={styles.algorithmstext}>PLL 13 - Nb</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-13.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' F' R U2 R' U2 R' F R U R U2 R'")}>
              <Text style={styles.algorithmstext}>PLL 14 - Ra</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-14.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U2 R U2 R' F R U R' U' R' F' R2 U'")}>
              <Text style={styles.algorithmstext}>PLL 15 - Rb</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-15.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R U R' U' R' F R2 U' R' U' R U R' F' ")}>
              <Text style={styles.algorithmstext}>PLL 16 - T</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-16.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M2 U M U2 M' U M2")}>
              <Text style={styles.algorithmstext}>PLL 17 - Ua</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-17.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M2 U' M U2 M' U' M2")}>
              <Text style={styles.algorithmstext}>PLL 18 - Ub</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-18.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: R' U R' U' y R' F' R2 U' R' U R' F R F")}>
              <Text style={styles.algorithmstext}>PLL 19 - V</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-19.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: F R U' R' U' R U R' F' R U R' U' R' F R F'")}>
              <Text style={styles.algorithmstext}>PLL 20 - Y</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-20.png')} style={styles.image}></Image>
            </View>
            <View style={styles.algorithms}>
            <TouchableOpacity onPress={() => alert("Algorithms: M2 U M2 U M' U2 M2 U2 M'")}>
              <Text style={styles.algorithmstext}>PLL 21 - Z</Text>
            </TouchableOpacity>
              <Image source={require('./PLL-21.png')} style={styles.image}></Image>
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
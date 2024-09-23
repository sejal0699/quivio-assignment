
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LogoutModal = ({ visible, closeModal }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={closeModal}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Image style={styles.modalIcon} source={require('../assets/images/failed.png')} />
          <Text style={styles.modalTitle}>Exit 2FA?</Text>
          <Text style={styles.modalMessage}>
            Are you sure you want to exit 2FA, You will need to redo it again.
          </Text>
          <View style={styles.buttonbox}>
            <TouchableOpacity onPress={closeModal} style={styles.okButtonExit}>
              <Text style={styles.okButtonTextexit}>No, Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal} style={styles.okButton}>
              <Text style={styles.okButtonText}>Yes, Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  okButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'

  },
  okButtonExit: {
    backgroundColor: '#F6F7F7',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonbox: {
    flexDirection: "row",
    gap: 10
  },
  okButtonTextexit: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default LogoutModal;

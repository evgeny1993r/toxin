class DropdownRoom {
  constructor(dropdownRoomElement) {
    this.$dropdownRoom = $(dropdownRoomElement);
    this.bedrooms = this.$dropdownRoom.data('bedrooms');
    this.beds = this.$dropdownRoom.data('beds');
    this.bathrooms = this.$dropdownRoom.data('bathrooms');
    this.$dropdownRoom.dropdownRoomList([this.bedrooms, this.beds, this.bathrooms]);
  }
}

export {
  DropdownRoom,
};

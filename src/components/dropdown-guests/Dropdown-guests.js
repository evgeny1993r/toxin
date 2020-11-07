class DropdownGuests {
  constructor(dropdownGuestsElement) {
    this.$dropdownGuests = $(dropdownGuestsElement);
    this.adults = this.$dropdownGuests.data('adults');
    this.children = this.$dropdownGuests.data('children');
    this.babies = this.$dropdownGuests.data('babies');
    this.$dropdownGuests.dropdownGuests([this.adults, this.children, this.babies]);
  }
}

export {
  DropdownGuests,
};

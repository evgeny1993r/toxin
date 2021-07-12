import '../../vendors/dropdown-guests-plugin/dropdown-guests-plugin';

class ProxyDropdownGuests {
  constructor(dropdownGuestsElement) {
    this.$dropdownGuests = $(dropdownGuestsElement);
    this.adults = this.$dropdownGuests.data('adults');
    this.children = this.$dropdownGuests.data('children');
    this.babies = this.$dropdownGuests.data('babies');
    this.$dropdownGuests.dropdownGuestList([this.adults, this.children, this.babies]);
  }
}

export {
  ProxyDropdownGuests,
};

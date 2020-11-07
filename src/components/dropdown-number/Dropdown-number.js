class DropdownNumber {
  constructor(dropdownNumberElement) {
    this.$dropdownNumber = $(dropdownNumberElement);
    this.bedrooms = this.$dropdownNumber.data('bedrooms');
    this.beds = this.$dropdownNumber.data('beds');
    this.bathrooms = this.$dropdownNumber.data('bathrooms');
    this.$dropdownNumber.dropdownNumber([this.bedrooms, this.beds, this.bathrooms]);
  }
}

export {
  DropdownNumber,
};

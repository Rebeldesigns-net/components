export const config = {
  // The MDC sidenav hasn't been implemented yet.
  skippedPackages: ['mdc-sidenav'],
  // We have to export some underscored symbols so that they can be used with MDC.
  // Exclude them from this check since they aren't part of the public API.
  skippedSymbols: [/^_/],
  skippedExports: {
    'mdc-chips': [
      // These components haven't been implemented for MDC due to a different accessibility pattern.
      'MatChipListChange',
      'MatChipList',
    ],
    'mdc-chips/testing': [
      // Test harness code for a component that hasn't been implemented for MDC.
      'MatChipListHarness',
      'ChipListHarnessFilters',
    ],
    'mdc-slider': [
      // ControlValueAccessor implementation detail.
      'MAT_SLIDER_VALUE_ACCESSOR',
      // Irrelevant for the MDC implementation, because the slider doesn't dispatch any events.
      'MatSliderChange',
    ],
  } as {[entryPointName: string]: string[]},
};

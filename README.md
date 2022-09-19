After git clone

npm install

npm run nx e2e hello-e2e



✔ Compiled successfully.

====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        10.8.0                                                                         │
  │ Browser:        Electron 102 (headless)                                                        │
  │ Node Version:   v14.17.0 (/Users/dlin/.nvm/versions/node/v14.17.0/bin/node)                    │
  │ Specs:          1 found (landing.feature)                                                      │
  │ Searched:       **/*.feature                                                                   │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  landing.feature                                                                 (1 of 1)


  0 passing (5ms)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        0                                                                                │
  │ Passing:      0                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     0 seconds                                                                        │
  │ Spec Ran:     landing.feature                                                                  │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
  -  Finished processing: /Users/dlin/sandbox/nx/nx-cucumber-preprocessor/apps/hello-    (0 seconds)
                          e2e/cypress/videos/landing.feature.mp4                                    


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  landing.feature                            0ms        -        -        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                          0ms        -        -        -        -        -  


 ————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

 >  NX   Successfully ran target e2e for project hello-e2e (12s)

import { getBuiltGraphSDK } from "../.graphclient";


const sdk = getBuiltGraphSDK();

sdk
  .IndexerAllocationCreations({
    first: 2500,
    skip: 0,
  })
  .then((data) => {
    console.log(
      "this will succeed and find > 1000 allocation creation events",
      data.allocationCreatedEvents.length
    );
  });

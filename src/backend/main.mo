import Runtime "mo:core/Runtime";

actor {
  public shared ({ caller }) func ping() : async () {
    Runtime.trap("Ping failed. This actor is not meant to be called at all. Function exists to make it compile.");
  };
};
